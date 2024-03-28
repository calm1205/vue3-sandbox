<template>
  <h2>Child</h2>

  <div>
    <p>hello: {{ arg.hello }}</p>
    <p>world: {{ arg.world }}</p>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue"

export default {
  name: "Child",
  props: {
    arg: {
      type: Object as PropType<{ hello: string; world: string }>,
      required: true,
      default: () => ({
        hello: String,
        world: String,
      }),
    },
  },
}
</script>

<style lang="scss" scoped></style>
