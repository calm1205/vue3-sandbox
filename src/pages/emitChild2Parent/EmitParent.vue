<script lang="ts">
import EmitChild from "@/pages/emitChild2Parent/EmitChild.vue"

export default {
  components: { EmitChild },
  data() {
    return {
      count: 0,
    }
  },
}
</script>

<template>
  <div class="wrapper">
    <h1>Emit child → parent</h1>

    <p>子コンポーネントから親コンポーネントにイベントの引数を通して値を渡す</p>

    <section class="parent">
      <h2>Parent</h2>
      <p>count: {{ count }}</p>
    </section>

    <EmitChild
      @get-count="(childCount) => (count = childCount)"
      @increment-parent="count++"
    />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.parent {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
