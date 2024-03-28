<script setup lang="ts">
import VanillaModel from "./VanillaModel.vue"
import ComponentModel from "./ComponentModel.vue"

import { ref } from "vue"

const componentModelText = ref("")
const componentModelText2 = ref("")
</script>

<template>
  <section class="wrap">
    <h1>Model</h1>

    <!-- 純粋なv-model -->
    <VanillaModel />

    <!-- コンポーネント化したv-model -->
    <ComponentModel
      :model-value="componentModelText"
      @update:model-value="
        (newValue: string) => (componentModelText = newValue)
      "
    />
    <ComponentModel v-model="componentModelText2" />
  </section>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
}
</style>
