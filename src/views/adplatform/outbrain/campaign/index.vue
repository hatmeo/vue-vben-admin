<template>
  <Row>
    <!-- <Col :span="24">
      <Space wrap>
        <Input v-model="search" placeholder="Search" />
      </Space>
    </Col> -->
    <Col :span="24">
      <Space>
        <Button type="primary" @click="AddCampaign">Add Campaign</Button>
      </Space>
    </Col>
    <Col :span="24">
      <Table :columns="columns" :dataSource="data" :pagination="pagination" :loading="loading">
        <template #action="{ record }">
          <Space>
            <Button type="primary" @click="EditCampaign(record)">Edit</Button>
            <Button type="danger" @click="DeleteCampaign(record)">Delete</Button>
          </Space>
        </template>
      </Table>
    </Col>
  </Row>
</template>
<script lang="ts" setup>
  import { Row, Col, Table, Space, Input, Button } from 'ant-design-vue';
  import { onMounted, ref } from 'vue';
  import { router } from '@/router';
  import { campaignListApi } from '@/api/adplatform/adplatform';

  // type CampaignParams = {
  //   search: string;
  //   marketerId: string;
  //   limit: number;
  //   offset: number;
  //   extraFields: string;
  // };

  // type CampaignAPIResult = {
  //   name: string;
  //   status: string;
  //   enabled: boolean;
  //   budgetId: string;
  //   currency: string;
  //   marketerId: string;
  //   creationTime: string;
  //   startDate: string;
  //   endDate: string;
  // };

  const search = ref('');

  const platform = 'Outbrain';

  const data = ref([]);

  const total = ref(0);

  const loading = ref(true);

  const AddCampaign = () => {
    console.log('Add Campaign');
    router.push({ name: 'OutbrainCampaignAdd', params: { platform: platform } });
  };

  const DeleteCampaign = (record) => {
    // add confirm dialog
    console.log('Delete Campaign', record);
  };

  const EditCampaign = (record) => {
    console.log('Edit Campaign', record);
    router.push({ name: 'OutbrainCampaignEdit', query: { platform: platform, id: record.id } });
  };

  const pagination = {
    current: 1,
    pageSize: 10,
    total: total.value,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `Total ${total} items`,
    onChange: (page, pageSize) => {
      pagination.current = page;
      pagination.pageSize = pageSize;
      fetchCampaignList();
    },
    onShowSizeChange: (current, size) => {
      pagination.current = current;
      pagination.pageSize = size;
      fetchCampaignList();
    },
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Enabled',
      dataIndex: 'enabled',
      key: 'enabled',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'BudgetId',
      dataIndex: 'budgetId',
      key: 'budgetId',
    },
    {
      title: 'Currency',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'MarketerId',
      dataIndex: 'marketerId',
      key: 'marketerId',
    },
    {
      title: 'Creation Time',
      dataIndex: 'creationTime',
      key: 'creationTime',
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Action',
      key: 'action',
      slots: { customRender: 'action' },
    },
  ];

  const fetchCampaignList = async () => {
    try {
      const params = {
        search: search.value,
        marketerId: '00711aee410af2e6d411e4faa07f01c0c7',
        limit: pagination.pageSize,
        offset: (pagination.current - 1) * pagination.pageSize,
        extraFields:
          'CustomAudience,Locations,InterestsTargeting,BidBySections,BlockedSites,PlatformTargeting,CampaignOptimization,Scheduling,IABCategories,CampaignPixels',
      };

      campaignListApi(platform, params).then((res) => {
        data.value = res.campaigns.campaigns.map((campaign) => {
          return {
            id: campaign.id,
            name: campaign.name,
            status: campaign.status,
            enabled: campaign.enabled,
            budgetId: campaign.budget.id,
            currency: campaign.currency,
            marketerId: campaign.marketerId,
            creationTime: campaign.creationTime,
            startDate: campaign.startDate,
            endDate: campaign.endDate,
          };
        });

        total.value = res.campaigns.totalCount;
        // config the pagination total
        pagination.total = total.value;
        loading.value = false;
      });
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };

  onMounted(fetchCampaignList);

  // on watch search
</script>
<style lang="scss" scoped></style>
