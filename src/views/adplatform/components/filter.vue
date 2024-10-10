<template>
  <div class="filter-container">
    <input v-model="filterText" @input="onFilterChange" placeholder="Filter..." />
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const filterText = ref('');

  const onFilterChange = () => {
    emit('filter-change', filterText.value);
  };
</script>

<style scoped>
  .filter-container {
    margin-bottom: 20px;
  }
</style>
