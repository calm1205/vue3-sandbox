<script lang="ts">
import EmitChild from "@/pages/emit2/EmitChild.vue"

export default {
  components: { EmitChild },
  data() {
    return {
      parentCount: 0,
    }
  },
  methods: {
    increment() {
      this.parentCount++
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Emit parent → child</h1>

    <h2>Emit Parent</h2>
    <p>parentCount: {{ parentCount }}</p>
    <EmitChild @onClick="increment" />
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
