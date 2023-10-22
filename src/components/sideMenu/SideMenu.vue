<template>
  <div class="wrapper">
    <ul>
      <Item v-for="item in list" :key="item" :text="item" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { COLOR } from "@/constants/styles.ts"
import Item from "./Item.vue"

export default defineComponent({
  props: {
    list: { type: Array<string>, required: true },
  },
  data() {
    return { COLOR }
  },
  components: {
    Item,
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
</style>
