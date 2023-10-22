<template>
  <li>
    {{ text }}
  </li>
</template>

<script lang="ts">
import { COLOR } from "@/constants/styles.ts"
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    text: { type: String, required: true },
  },
  data() {
    return { COLOR }
  },
})
</script>

<style lang="scss" scoped>
li {
  color: v-bind("COLOR.text");
}
</style>
