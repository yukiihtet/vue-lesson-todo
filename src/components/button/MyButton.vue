<template>
  <button class="button" :style="extraStyle">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "extraStyle"],
};
</script>

<style scoped>
.button {
  padding: 4px 8px;
  background: #330fff;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
}
</style>