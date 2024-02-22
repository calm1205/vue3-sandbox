<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: custom.$COlOR_PRIMARY_LIGHT;
  padding: 50px;
  height: 100vh;
  width: 100%;
}
</style>
