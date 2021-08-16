<template>
  <div class="home">
    <img width="50px" alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <hr />
    <ZjhInput v-model="inputValue" />
    <div class="input-val">inputValue: {{ inputValue }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      inputValue: 1
    };
  }
};
</script>

<style lang="less" scoped>
.input-val {
  margin-top: 5px;
  padding: 5px 10px;
  background-color: skyblue;
}
</style>
