<script lang="ts">
import SideMenu from "@/components/sideMenu/SideMenu.vue"
import MainArea from "@/components/MainArea.vue"

export default {
  components: {
    SideMenu,
    MainArea,
  },
}
</script>

<template>
  <div class="wrapper">
    <SideMenu :list="['Vue', 'React', 'Angular']" />
    <MainArea>
      <router-view />
    </MainArea>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
}
</style>
