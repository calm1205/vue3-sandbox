<script lang="ts">
export default {
  name: "EmitChild",
  emits: ["getCount", "childCount"],
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    childCount() {
      this.$emit("childCount", this.count)
    },
    getCount() {
      this.$emit("getCount", this.count)
    },
    increment() {
      this.count++
      this.childCount()
    },
  },
}
</script>

<template>
  <h2>Emit Child</h2>
  <div class="wrapper">
    <button @click="getCount">Update parent count</button>
    <button @click="increment">Increment</button>
    <p>childCount: {{ count }}</p>
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
