<template>
   <div>
    <input type="file" @change="handleFileChange" />
    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
// https://juejin.cn/post/6844904046436843527#heading-0
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const SIZE = 10 * 1024 * 1024; // 切片大小
    const state = reactive({
      container: { file: null },
      data: []
    });
    const handleFileChange = e => {
      const [file] = e.target.files;
      if (!file) return;
      //   Object.assign(this.$data, this.$options.data());
      state.container.file = file;
    };

    const request = ({
      url,
      method = "post",
      data,
      headers = {},
      /* eslint-disable */
      requestList
    }) => {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        Object.keys(headers).forEach(key =>
          xhr.setRequestHeader(key, headers[key])
        );
        xhr.send(data);
        xhr.onload = e => {
          resolve({
            data: e.target.response
          });
        };
      });
    };
    // 生成文件切片
    const createFileChunk = (file, size = SIZE) => {
      const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    };
    // 上传切片
    const uploadChunks = async () => {
      const requestList = state
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", state.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          request({
            url: "http://localhost:3000", // 自己创建一个本地服务器
            data: formData
          })
        );
      // 合并切片
      await Promise.all(requestList); // 并发切片
    };
    const handleUpload = async () => {
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      state.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: state.container.file.name + "-" + index // 文件名 + 数组下标
      }));
      await uploadChunks();
    };
    const mergeRequest = async () => {
      await request({
        url: "http://localhost:3000/merge",
        headers: {
          "content-type": "application/json"
        },
        data: JSON.stringify({
          filename: state.container.file.name
        })
      });
      await handleUpload();
    };
    // const handleUpload = async () => {};
    return {
      ...toRefs(state),
      handleFileChange,
      createFileChunk,
      uploadChunks,
      mergeRequest
    };
  }
};
</script>
