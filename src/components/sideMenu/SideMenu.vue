<template>
  <div class="wrapper">
    <ul>
      <Item
        v-for="item of routes"
        :key="item.name"
        :text="item.name?.toString() ?? ''"
        :path="item.path?.toString() ?? ''"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { routes } from "@/router.ts"
import Item from "./Item.vue"

export default defineComponent({
  props: {
    list: { type: Array<string>, required: true },
  },
  data() {
    return { routes }
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
  background-color: custom.$COLOR_PRIMARY;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
