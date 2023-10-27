<script lang="ts">
export default {
  name: "EmitChild",
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    getCount() {
      this.$emit("getCount", this.count)
    },
    increment() {
      this.count++
    },
  },
}
</script>

<template>
  <h2>Emit Child</h2>
  <div class="wrapper">
    <button @click="getCount">Update count</button>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 20px;
}
.wrapper {
  display: flex;
  gap: 20px;
}
</style>
