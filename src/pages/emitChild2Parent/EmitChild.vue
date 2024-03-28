<script lang="ts">
export default {
  name: "EmitChild",
  emits: ["getCount"],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    getCount() {
      console.log("getCount")
      this.$emit("getCount", this.count)
    },
    increment() {
      this.count++
    },
  },
}
</script>

<template>
  <h2>Child</h2>
  <p>childCount: {{ count }}</p>
  <div class="wrapper">
    <button @click="getCount">update parent count</button>
    <button @click="increment">Increment</button>
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
