<script lang="ts">
import EmitChild from "@/pages/emit/EmitChild.vue"

export default {
  components: { EmitChild },
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Emit</h1>
    <p>{{ count }}</p>
    <EmitChild @getCount="count = $event" />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
