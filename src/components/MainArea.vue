<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.wrapper {
  background-color: custom.$COlOR_PRIMARY_LIGHT;
  padding: 50px;
  height: 100vh;
  width: 100%;
}
</style>
