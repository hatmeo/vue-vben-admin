import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

import { t } from '@/hooks/web/useI18n';

const adPlatform: AppRouteModule = {
  path: '/adplatform',
  name: 'AdPlatform',
  component: LAYOUT,
  meta: {
    orderNo: 1,
    icon: 'ion:build-outline',
    title: t('routes.adplatform.AdPlatform'),
  },
  children: [
    {
      path: '/adplatform',
      name: 'AdPlatform',
      meta: { title: t('routes.adplatform.Platform') },
      component: () => import('@/views/adplatform/index.vue'),
    },
    {
      path: '',
      name: 'Outbrain',
      meta: {
        title: t('routes.adplatform.Outbrain'),
      },
      children: [
        {
          path: '/adplatform/outbrain',
          name: 'OutbrainOverview',
          meta: { title: t('routes.adplatform.Overview') },
          component: () => import('@/views/adplatform/outbrain/index.vue'),
        },
        {
          path: '/adplatform/outbrain/campaign',
          name: 'OutbrainCampaign',
          meta: { title: t('routes.adplatform.Campaign') },
          component: () => import('@/views/adplatform/outbrain/campaign/index.vue'),
        },
        {
          path: '/adplatform/outbrain/setting',
          name: 'OutbrainSetting',
          meta: { title: t('routes.adplatform.Setting') },
          component: () => import('@/views/adplatform/outbrain/setting/index.vue'),
        },
        {
          path: '/adplatform/outbrain/report',
          name: 'OutbrainReport',
          meta: { title: t('routes.adplatform.Report') },
          component: () => import('@/views/adplatform/outbrain/report/index.vue'),
        },
        {
          path: '/adplatform/outbrain/user',
          name: 'OutbrainCreative',
          meta: { title: t('routes.adplatform.User') },
          component: () => import('@/views/adplatform/outbrain/user/index.vue'),
        },
        {
          path: '/adplatform/outbrain/marketes',
          name: 'OutbrainMarketers',
          meta: { title: t('routes.adplatform.Marketers') },
          component: () => import('@/views/adplatform/outbrain/marketers/index.vue'),
        },
        {
          path: '/adplatform/outbrain/segments',
          name: 'OutbrainSegments',
          meta: { title: t('routes.adplatform.Segments') },
          component: () => import('@/views/adplatform/outbrain/segments/index.vue'),
        },
      ],
    },
    {
      path: '',
      name: 'Taboola',
      meta: { title: t('routes.adplatform.Taboola') },
      component: () => import('@/views/adplatform/taboola/index.vue'),
      children: [
        {
          path: '/adplatform/taboola',
          name: 'TaboolaOverview',
          meta: { title: t('routes.adplatform.Overview') },
          component: () => import('@/views/adplatform/taboola/index.vue'),
        },
        {
          path: '/adplatform/taboola/campaign',
          name: 'TaboolaCampaign',
          meta: { title: t('routes.adplatform.Campaign') },
          component: () => import('@/views/adplatform/taboola/campaign/index.vue'),
        },
        {
          path: '/adplatform/taboola/setting',
          name: 'TaboolaSetting',
          meta: { title: t('routes.adplatform.Setting') },
          component: () => import('@/views/adplatform/taboola/setting/index.vue'),
        },
      ],
    },
    {
      path: '/adplatform/newsbreak',
      name: 'NewsBreak',
      meta: { title: t('routes.adplatform.NewsBreak') },
      component: () => import('@/views/adplatform/newsbreak/index.vue'),
    },
    {
      path: '/adplatform/MediaGo',
      name: 'MediaGo',
      meta: { title: t('routes.adplatform.MediaGo') },
      component: () => import('@/views/adplatform/mediago/index.vue'),
    },
  ],
};

export default adPlatform;
