<template>
  <div class="filter-header">
    <Button
      v-for="option in options"
      :key="option.value"
      :class="{
        selected: selected === option.value,
      }"
      @click="handleClick(option.value)"
    >
      <CheckOutlined v-if="selected === option.value" type="check" />
      {{ option.label }}
    </Button>
    <RangePicker @change="handleChange" v-model:value="selectedDates" />
  </div>
</template>

<script setup>
  import { ref, defineEmits, onBeforeMount } from 'vue';
  import { Button, RangePicker } from 'ant-design-vue';
  import { CheckOutlined } from '@ant-design/icons-vue';
  import { useI18n } from '@/hooks/web/useI18n';

  const emit = defineEmits(['sendData']);
  const { t } = useI18n();
  // 日期选择
  const options = [
    { label: t('report.Today'), value: 'TODAY' },
    { label: t('report.Yesterday'), value: 'YESTERDAY' },
    { label: t('report.Last 7 Days'), value: 'LAST_7_DAYS' },
    { label: t('report.Last 30 Days'), value: 'LAST_30_DAYS' },
    { label: t('report.This Month'), value: 'MONTH_TO_DATE' },
    // { label: 'Last month', value: 'lastMonth' },
  ];

  const selected = ref('TODAY');
  // 自定义范围
  const selectedDates = ref([]);
  const startDate = ref('');
  const endDate = ref('');
  const handleClick = (value) => {
    selected.value = value;
    emit('sendData', {
      startDate: startDate.value,
      endDate: endDate.value,
      type: selected.value,
    });
  };

  const handleChange = (dates) => {
    if (dates && dates.length === 2) {
      startDate.value = formatDate(dates[0]);
      endDate.value = formatDate(dates[1]);
      selected.value = 'CUSTOM';
      emit('sendData', {
        startDate: startDate.value,
        endDate: endDate.value,
        type: selected.value,
      });
      console.log('Start Date:', startDate.value);
      console.log('End Date:', endDate.value);
    }
  };
  const formatDate = (date) => {
    return {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    };
  };
  onBeforeMount(() => {
    emit('sendData', {
      startDate: startDate.value,
      endDate: endDate.value,
      type: selected.value,
    });
  });
</script>

<style>
  .filter-header {
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 64px;
    padding: 0 5px;
    border-bottom: 1px solid #dadce0;
    background-color: #fff;
    gap: 10px;
  }

  .selected {
    border-color: gray;
    background-color: #e8f0fe;
    color: gray;
  }
</style>
