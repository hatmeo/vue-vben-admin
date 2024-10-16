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
        <AntTableComponent
          v-if="!loading"
          :columns="columns"
          :data-source="data"
          :scroll="{ x: 2000 }"
          :expand-column-width="100"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount } from 'vue';
  import FilterComponent from '../components/filter.vue';
  import TableComponent from '../components/table.vue';
  import AntTableComponent from '../components/AntTable.vue';
  import { campaignListApi } from '@/api/adplatform/adplatform';

  const loading = ref(true);
  const tableHeader = ref([]);
  const tableData = ref([]);
  const filterText = ref('');

  const params = {};

  var platform = 'Outbrain';

  params.marketerId = '00711aee410af2e6d411e4faa07f01c0c7';
  params.extraFields =
    'CustomAudience,Locations,InterestsTargeting,BidBySections,BlockedSites,PlatformTargeting,CampaignOptimization,Scheduling,IABCategories,CampaignPixels';

  const { campaings } = await campaignListApi(platform, params);

  const updateFilter = (newFilterText) => {
    filterText.value = newFilterText;
  };

  console.log(campaings);
</script>
