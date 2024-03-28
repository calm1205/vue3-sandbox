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
    alertText(text: string) {
      const upperText = text.toUpperCase()
      alert(upperText)
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Props</h1>
    <h2>Parent</h2>
    <p>count: {{ count }}</p>

    <Child :text="message" :onClick="increment" :alertText="alertText" />
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
