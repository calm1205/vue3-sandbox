<script lang="ts">
export default {
  name: "EmitChild",
  emits: ["onClick"],
  methods: {
    onClick() {
      this.$emit("onClick")
    },
  },
}
</script>

<template>
  <h2>Child</h2>
  <div class="wrapper">
    <button @click="onClick">Increment parent count</button>
  </div>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 100px;
}
.wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
