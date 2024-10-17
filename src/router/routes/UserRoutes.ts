import type { AppRouteModule } from '@/router/types';
import { t } from '@/hooks/web/useI18n';

export const UserRoute: AppRouteModule[] = [
  {
    path: '/user',
    name: 'UserOne',
    component: import('@/views/demo/main-out/index.vue'),
    meta: {
      orderNo: 1,
      icon: 'ion:build-outline',
      title: t('routes.user.User'),
    },
    children: [],
  },
];

export const UserRoutes = UserRoute.map((item) => item.name);
