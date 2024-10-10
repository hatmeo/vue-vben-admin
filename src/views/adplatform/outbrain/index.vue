<template>
  <div>
    <div class="layout">
      <div :class="{ sidebar: true, isCollapsed: collapsed }">
        <div class="menu-container">
          <leftMenu :isCollapsed="collapsed" @menu-send-data="menuSendData" />
        </div>
      </div>
      <div class="content">
        <div class="loading-container" v-if="loading">
          <Spin size="large" />
        </div>
        <div v-if="!loading" class="top-toggle">
          <div class="title-container">
            <Button @click="toggleMenu"> <AlignLeftOutlined /> </Button><em>{{ title }}</em>
          </div>
        </div>

        <FilterComponent v-if="!loading" @filter-change="updateFilter" />
        <TableComponent
          v-if="!loading"
          :tableHeader="tableHeader"
          :tableData="tableData"
          :filterText="filterText"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import FilterComponent from '../components/filter.vue';
  import TableComponent from '../components/table.vue';
  import { campaignListApi } from '@/api/adplatform/adplatform';

  const loading = ref(true);
  const tableHeader = ref([]);
  const tableData = ref([]);
  const filterText = ref('');

  const params = {};

  var platform = 'Outbrain';

  const { campaings } = await campaignListApi(platform, params);

  const updateFilter = (newFilterText) => {
    filterText.value = newFilterText;
  };

  console.log(campaings);
</script>
