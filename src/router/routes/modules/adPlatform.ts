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
      path: '/adplatform/outbrain',
      name: 'Outbrain',
      meta: {
        title: t('routes.adplatform.Outbrain'),
        // Add a new meta property
        // icon: 'ion:build-outline',
        // orderNo: 1,
      },
      component: () => import('@/views/adplatform/outbrain/index.vue'),
    },
    {
      path: '/adplatform/taboola',
      name: 'Taboola',
      meta: { title: t('routes.adplatform.Taboola') },
      component: () => import('@/views/adplatform/taboola/index.vue'),
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
