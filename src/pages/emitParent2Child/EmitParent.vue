<script lang="ts">
import EmitChild from "@/pages/emitParent2Child/EmitChild.vue"

export default {
  components: { EmitChild },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Emit parent → child</h1>
    <p>親コンポーネントから子コンポーネントにイベントを渡す</p>

    <h2>Parent</h2>
    <p>count: {{ count }}</p>
    <EmitChild @onClick="increment" />
  </div>
</template>

<style scoped lang="scss">
h2 {
  font-size: 20px;
}
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
