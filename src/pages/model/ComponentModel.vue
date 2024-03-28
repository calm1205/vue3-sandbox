<script lang="ts">
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
}
</script>

<template>
  <section>
    <h2>ComponentModel</h2>

    <div>
      <label for="componentModel">ComponentModel: </label>
      <span>{{ modelValue }}</span>
    </div>
    <!-- emitのevent名はupdate:hogeである必要がある -->
    <input
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <hr />
  </section>
</template>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
