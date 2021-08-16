<template>
  <div class="zjh-button">
    <el-button :type="type" @click="handleClick"><slot name="default"></slot></el-button>
  </div>
</template>

<script>
export default {
  name: 'ZjhButton',
  props: {
    type: String
  },
  methods: {
    handleClick() {
      alert('handleClick');
    }
  }
};
</script>

<style lang="less" scoped>
.zjh-button {
  border-radius: 10px;
  padding: 20px 30px;
  background: #ccc;

  .el-button--primary {
    color: purple;
    font-size: 28px;
  }
}
</style>
