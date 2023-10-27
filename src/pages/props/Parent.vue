<script lang="ts">
import Child from "@/pages/props/Child.vue"

export default {
  components: { Child },
  data() {
    return {
      count: 0,
      message: "Hello from Parent",
    }
  },
  methods: {
    increment() {
      this.count++
    },
    getCount() {
      return this.count
    },
  },
  computed: {
    parentCount() {
      return this.count
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Props</h1>
    <h2>Parent</h2>
    <p>parentCount: {{ parentCount }}</p>
    <p>getCount: {{ getCount() }}</p>
    <Child :text="message" :onClick="increment" />
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 20px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
