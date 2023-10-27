<script lang="ts">
export default {
  name: "Child",
  props: {
    text: { type: String, required: true },
    onClick: { type: Function, required: true },
  },
}
</script>

<template>
  <h2>Emit Child</h2>
  <div class="wrapper">
    <p>{{ text }}</p>
    <button :click="onClick">Increment</button>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 20px;
  margin-top: 100px;
}
.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
