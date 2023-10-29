<template>
  <h2>Child</h2>
</template>

<script lang="ts">
export default {
  name: "Child",
  props: {
    arg: {
      type: Object,
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
