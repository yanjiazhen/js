<template>
    <div>
        <h2>运动清单</h2>
        <input :value="title" @keyup.enter="inputKeyDown"/>
        <button @click="delect">清理</button>
        <ul>
            <li v-for="item in list" :key="item.name">
                <input type="checkbox" v-model="item.select">
                <p :class="{'done':item.select}">{{item.title}}</p>
            </li>
        </ul>
        <p>{{active}}/{{all}} <button @click="selectAll">全选</button><input type="checkbox" v-model="checkAll"/></p>
    </div>
</template>
<script setup>
/* 创建一个任务清单
在输入框输入内容后，敲下回车，下面就会新增一条数据。
对于每个要做的事情，用复选框标记，标记后字体会变灰，并带有一个删除的效果，表示这件事情已经做完了。
*/
import { onMounted, computed, ref } from "vue";
let title = ref("");
let list = ref([
  {
    select: false,
    title: "开合跳"
  },
  {
    select: false,
    title: "波比跳"
  }
]);
onMounted(() => {
  let menulist = JSON.parse(localStorage.getItem("menuList"));
  console.log(menulist);
  if (menulist) {
    list.value = menulist;
  }
});
// watchEffect(()=>{
//   localStorage.setItem("menuList", JSON.stringify(list.value));
// })
const active = computed(() => {
  return list.value.filter(item => item.select).length;
});
const all = computed(() => {
  return list.value.length;
});
const checkAll = computed({
  get: () => {
    return active.value === list.value.length;
  },
  set: val => {
    //   console.log(val)
    list.value.forEach(todo => {
      todo.select = val;
    });
  }
});
const inputKeyDown = function(v) {
  list.value.push({ select: false, title: v.target.value });
  title.value = "";
  localStorage.setItem("menuList", JSON.stringify(list.value));
};
const delect = function() {
  list.value = list.value.filter(item => !item.select);
  localStorage.setItem("menuList", JSON.stringify(list.value));
};
const selectAll = () => {
  list.value.forEach(element => {
    element.select = true;
  });
}
</script>
<style>
li {
  display: flex;
  align-items: center;
  height: 30px;
}
.done {
  color: gray;
  text-decoration: line-through;
}
</style>


