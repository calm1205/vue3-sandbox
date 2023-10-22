<template>
  <div class="wrapper">
    <ul>
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { COLOR } from "@/constants/styles.ts"

export default defineComponent({
  props: {
    list: { type: Array<string>, required: true },
  },
  data() {
    return { COLOR }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 300px;
  height: 100vh;
  padding: 50px;
  background-color: v-bind("COLOR.primary._");
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

li {
  color: white;
}
</style>
