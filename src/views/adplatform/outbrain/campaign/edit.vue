<template>
  <div>
    <h1>Campaign Edit Page</h1>
    <p>Campaign ID: {{ campaignId }}</p>
    <p>Platform: {{ platform }}</p>
    <Form name="basic">
      <Form.Item label="Campaign Name">
        <Input />
      </Form.Item>
      <Form.Item label="Budget">
        <Input />
      </Form.Item>
      <Form.Item label="Currency">
        <Input />
      </Form.Item>
      <Form.Item label="Start Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date">
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  </div>
</template>
<script setup>
  import { Form } from 'ant-design-vue';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { campaignDetailApi } from '@/api/adplatform/adplatform';

  const $route = useRoute();

  const Campaign = {
    name: '',
    budget: '',
    currency: '',
    startDate: '',
    endDate: '',
  };

  const campaignId = ref($route.query.id || '');
  const platform = ref($route.query.platform || '');

  if (!campaignId.value || !platform.value) {
    console.error('Missing campaign ID or platform');
  }

  const Submit = () => {
    console.log('Submit');
  };

  const fetchData = async () => {
    try {
      console.log('Fetching campaign data');
      const params = {
        campaignId: campaignId.value,
      };
      const response = await campaignDetailApi(platform.value, campaignId.value, params);
      console.log('Campaign data:', response);
    } catch (error) {
      console.error('Failed to fetch campaign data', error);
    }
  };

  onMounted(fetchData);
</script>
