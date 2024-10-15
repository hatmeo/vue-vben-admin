<template>
  <table>
    <thead>
      <tr>
        <th v-for="header in tableHeader" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in filteredData" :key="row.id">
        <td v-for="cell in row" :key="cell">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
  import { computed } from 'vue';

  // import { Table } from 'ant-design-vue';

  const props = defineProps({
    tableHeader: Array,
    tableData: Array,
    filterText: String,
  });

  const filteredData = computed(() => {
    if (!props.filterText) return props.tableData;
    return props.tableData.filter((row) =>
      Object.values(row).some((cell) =>
        cell.toString().toLowerCase().includes(props.filterText.toLowerCase()),
      ),
    );
  });
</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }
</style>
