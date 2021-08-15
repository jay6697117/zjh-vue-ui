<template>
  <div class="zjh-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'x-button',
  props: {
    type: String
  }
};
</script>

<style scoped>
.zjh-button {
  display: inline-block;
  padding: 3px 6px;
  background: #000;
  color: #fff;
}
</style>
