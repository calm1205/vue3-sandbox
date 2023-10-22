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
export default {
  props: ["list"],
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 300px;
  height: 100vh;
  padding: 50px;
  background-color: $COLOR_PRIMARY;
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
