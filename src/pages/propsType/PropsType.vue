<template>
  <section>
    <h1>Props Type</h1>
    <Child
      :arg="{
        hello: '1',
        world: '2',
      }"
    />
  </section>
</template>

<script lang="ts">
import Child from "./Child.vue"

export default {
  name: "PropsType",
  components: { Child },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
