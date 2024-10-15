import { defHttp } from '@/utils/http/axios';

enum Api {
  GOOGLE_GENERATE = '/google/adsense/accounts/reports/generate',
  GOOGLE_LIST = '/google/adsense/accounts/list',
  GOOGLE_FILTER = '/google/adsense/report/get-filter',
  GOOGLE_GENERATE_SAVED_LIST = '/google/adsense/report/saved/list',
  GOOGLE_GENERATE_SAVED_REPORT = '/google/adsense/report/saved/generate',
}

export const googleGenerateApi = (params: any) => {
  return defHttp.get({ url: Api.GOOGLE_GENERATE, params });
};

export const googleListApi = () => {
  return defHttp.get({ url: Api.GOOGLE_LIST });
};

export const googleFilterApi = (params: any) => {
  return defHttp.get({ url: Api.GOOGLE_FILTER, params });
};

export const googleGenerateSavedListApi = (params: any) => {
  return defHttp.get({ url: Api.GOOGLE_GENERATE_SAVED_LIST, params });
};

export const googleGenerateSavedReportApi = (params: any) => {
  return defHttp.get({ url: Api.GOOGLE_GENERATE_SAVED_REPORT, params });
};
