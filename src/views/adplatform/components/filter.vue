<template>
  <div class="filter-container">
    <Input v-model:value="filterText" @input="onFilterChange" placeholder="Filter..." />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Input } from 'ant-design-vue';

  const emit = defineEmits(['filter-change']);

  const filterText = ref('');

  const onFilterChange = () => {
    console.log('filterText', filterText.value);
    emit('filter-change', filterText.value);
  };

  // const onFilterChange = () => {
  //   filterText.value = filterText.value;
  //   //emit('filter-change', filterText.value);
  // };
</script>

<style scoped>
  .filter-container {
    margin-bottom: 20px;
  }
</style>
