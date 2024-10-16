<template>
  <div>
    <div class="layout">
      <div class="content">
        <FilterComponent @filter-change="updateFilter" />
        <TableComponent
          :tableHeader="tableHeader"
          :tableData="tableData"
          :filterText="filterText"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, onBeforeMount, onMounted } from 'vue';
  // import { Button, Spin } from 'ant-design-vue';
  import FilterComponent from '../components/filter.vue';
  import TableComponent from '../components/table.vue';
  import { campaignListApi } from '@/api/adplatform/adplatform';

  // const loading = ref(true);
  const tableHeader = ref([
    'advertiser_id',
    'advertiser_name',
    'campaign_id',
    'campaign_name',
    'status',
  ]);
  const tableData = ref([]);
  const filterText = ref('Fetching data...');

  const params = {};

  const platform = 'Taboola';

  const updateFilter = (newFilterText) => {
    filterText.value = newFilterText;
  };

  onMounted(async () => {
    const res = await campaignListApi(platform, params);

    tableData.value = res.campaigns.results.map((campaign) => {
      return {
        advertiser_id: campaign.advertiser_id,
        advertiser_name: campaign.advertiser_id,
        campaign_id: campaign.id,
        campaign_name: campaign.name,
        status: campaign.status,
      };
    });

    filterText.value = '';
  });
  // console.log(JSON.stringify(campaings));
</script>
