<script setup lang="ts">
import VanillaModel from "./VanillaModel.vue"
</script>

<template>
  <section class="wrap">
    <h1>Model</h1>

    <VanillaModel />

    <hr />
  </section>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}
</style>
