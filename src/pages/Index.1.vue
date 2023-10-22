<script lang="ts">
import { COLOR } from "@/constants/styles.ts"

export default {
  data() {
    return {
      COLOR,
    }
  },
}
</script>

<template>
  <div class="wrapper">aaa</div>
</template>

<style lang="scss" scoped>
.wrapper {
  color: v-bind("COLOR.white");
}
</style>
