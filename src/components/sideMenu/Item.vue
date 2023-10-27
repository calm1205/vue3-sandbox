<template>
  <li>
    <router-link :to="path">{{ text }}</router-link>
  </li>
</template>

<script lang="ts">
import { COLOR } from "@/constants/styles.ts"
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    text: { type: String, required: true },
    path: { type: String, required: true },
  },
  data() {
    return { COLOR }
  },
})
</script>

<style lang="scss" scoped>
li {
  font-size: 14px;
  letter-spacing: 0.1em;
  color: v-bind("COLOR.text");
  cursor: pointer;
  &:hover {
    color: v-bind("COLOR.main._");
  }
}
</style>
