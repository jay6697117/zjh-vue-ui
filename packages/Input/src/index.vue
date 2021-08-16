<template>
  <div class="input">
    <input type="text" :value="inputValue" @input="handelInput" />
  </div>
</template>

<script>
export default {
  name: 'ZjhInput',
  model: {
    prop: 'inputValue', // 对应就是props/inputValue
    event: 'input' // emit的input事件
  },
  props: {
    inputValue: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handelInput(e) {
      this.$emit('input', e.target.value);
    }
  }
};
</script>

<style lang="less" scoped></style>
