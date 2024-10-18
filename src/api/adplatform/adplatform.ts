import en from '@/locales/lang/en';
import { defHttp } from '@/utils/http/axios';

enum Api {
  GET_CAMPAIGN_LIST_API = `/get-campaigns`,
  POST_CAMPAIGN_CREATE_API = `/post-campaigns`,
  PUT_CAMPAIGN_UPDATE_API = `/put-campaigns`,
  DELETE_CAMPAIGN_DELETE_API = `/delete-campaigns`,
  GET_CAMPAIGN_DETAIL_API = `/get-campaign`,
}

export const campaignListApi = (Platform: string, params: any) => {
  return defHttp.get({ url: '/platform/' + Platform + Api.GET_CAMPAIGN_LIST_API, params });
};

export const campaignCreateApi = (Platform: string, params: any) => {
  return defHttp.post({ url: '/platform/' + Platform + Api.POST_CAMPAIGN_CREATE_API, params });
};

export const campaignUpdateApi = (Platform: string, params: any) => {
  return defHttp.put({ url: '/platform/' + Platform + Api.PUT_CAMPAIGN_UPDATE_API, params });
};

export const campaignDeleteApi = (Platform: string, params: any) => {
  return defHttp.delete({ url: '/platform/' + Platform + Api.DELETE_CAMPAIGN_DELETE_API, params });
};

export const campaignDetailApi = (Platform: string, campaignId: string, params: any) => {
  return defHttp.get({
    url: '/platform/' + Platform + Api.GET_CAMPAIGN_DETAIL_API + '/' + campaignId,
    params,
  });
};
