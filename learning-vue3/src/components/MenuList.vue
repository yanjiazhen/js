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
<script>
/* 创建一个任务清单
在输入框输入内容后，敲下回车，下面就会新增一条数据。
对于每个要做的事情，用复选框标记，标记后字体会变灰，并带有一个删除的效果，表示这件事情已经做完了。
*/
import { onMounted, computed, reactive, toRefs } from "vue";
export default {
  setup() {
    const state = reactive({
      title: "",
      list: [
        {
          select: false,
          title: "开合跳"
        },
        {
          select: false,
          title: "波比跳"
        }
      ]
    });
    onMounted(() => {
      let list = JSON.parse(localStorage.getItem("menuList"));
      console.log(list);
      if (list) {
        state.list = list;
      }
    });
    const active = computed(() => {
      return state.list.filter(item => item.select).length;
    });
    const all = computed(() => {
      return state.list.length;
    });
    const checkAll = computed({
      get: () => {
        return active.value === state.list.length;
      },
      set: val => {
        //   console.log(val)
        state.list.forEach(todo => {
          todo.select = val;
        });
      }
    });
    const inputKeyDown = function(v) {
      state.list.push({ select: false, title: v.target.value });
      state.title = "";
      localStorage.setItem("menuList", JSON.stringify(state.list));
    };
    const delect = function() {
      state.list = state.list.filter(item => !item.select);
      localStorage.setItem("menuList", JSON.stringify(state.list));
    };
    const selectAll = () => {
      state.list.forEach(element => {
        element.select = true;
      });
    };
    return {
      ...toRefs(state),
      active,
      all,
      checkAll,
      inputKeyDown,
      delect,
      selectAll
    };
  }
  //   name: "MenuList",
  //   data() {
  //     return {
  //       title: "",
  //       list: [
  //         {
  //           select: false,
  //           title: "开合跳"
  //         },
  //         {
  //           select: false,
  //           title: "波比跳"
  //         }
  //       ]
  //     };
  //   },
  //   mounted() {
  //     let list = JSON.parse(localStorage.getItem("menuList"));
  //     console.log(list);
  //     if (list) {
  //       this.list = list;
  //     }
  //   },
  //   methods: {
  //     inputKeyDown(v) {
  //       this.list.push({ select: false, title: v.target.value });
  //       this.title = "";
  //       localStorage.setItem("menuList", JSON.stringify(this.list));
  //     },
  //     delect() {
  //       this.list = this.list.filter(item => !item.select);
  //       localStorage.setItem("menuList", JSON.stringify(this.list));
  //     },
  //     selectAll() {
  //       this.list.forEach(element => {
  //         element.select = true;
  //       });
  //     }
  //   },
  //   computed: {
  //     active() {
  //       return this.list.filter(item => item.select).length;
  //     },
  //     all() {
  //       return this.list.length;
  //     },
  //     // 使用计算属性的好处，实时的监听到数据变化，可缓存数据变化
  //     checkAll: {
  //       get: function() {
  //         return this.active === this.list.length;
  //       },
  //       set: function(val) {
  //         console.log(val)
  //         this.list.forEach(todo => {
  //           todo.select = val;
  //         });
  //       }
  //     }
  //   }
};
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


