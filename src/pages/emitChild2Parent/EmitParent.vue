<script lang="ts">
import EmitChild from "@/pages/emitChild2Parent/EmitChild.vue"

export default {
  components: { EmitChild },
  data() {
    return {
      childCount: 0,
      parentCount: 0,
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Emit child → parent</h1>

    <h2>Emit Parent</h2>
    <p>parentCount: {{ parentCount }}</p>
    <p>childCount: {{ childCount }}</p>
    <EmitChild
      @get-count="parentCount = $event"
      @child-count="childCount = $event"
    />
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
