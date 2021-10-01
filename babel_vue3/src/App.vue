<template>
  <img alt="Vue logo" src="./assets/logo.png" @click="imgBtn">
</template>

<script setup>
const imgBtn = () => {
  console.log("11");
  if (DEBUG) {
      console.log('bable vue3 && setup语法糖')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
