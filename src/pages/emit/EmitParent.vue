<script lang="ts">
import EmitChild from "@/pages/emit/EmitChild.vue"

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
      @getCount="parentCount = $event"
      @childCount="childCount = $event"
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
