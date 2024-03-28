<script lang="ts">
export default {
  name: "Model",
  data() {
    return {
      searchTextModel: "",
      searchTextVanilla: "",
    }
  },
}
</script>

<template>
  <section class="vanilla">
    <h2>VanillaModel</h2>

    <div>
      <label>v-model: </label>
      <span>{{ searchTextModel }}</span>
    </div>
    <input v-model="searchTextModel" />

    <!-- v-modelを分解したもの -->
    <div>
      <label>vanilla: </label>
      <span>{{ searchTextVanilla }}</span>
    </div>
    <input
      :value="searchTextVanilla"
      @input="searchTextVanilla = ($event.target as HTMLInputElement).value"
    />

    <hr />
  </section>
</template>

<style lang="scss" scoped>
.vanilla {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}
</style>
