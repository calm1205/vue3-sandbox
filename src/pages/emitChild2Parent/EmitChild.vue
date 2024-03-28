<script lang="ts">
export default {
  name: "EmitChild",
  emits: ["getCount", "incrementParent"],
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
    incrementParent() {
      this.$emit("incrementParent")
    },
  },
}
</script>

<template>
  <h2>Child</h2>
  <p>childCount: {{ count }}</p>
  <section class="wrapper">
    <button @click="getCount">update parent count</button>
    <button @click="increment">Increment child count</button>
    <button @click="incrementParent">Increment parent count</button>
  </section>
</template>

<style scoped lang="scss">
h2 {
  margin-top: 100px;
}
.wrapper {
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
