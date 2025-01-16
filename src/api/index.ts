import { apiClient } from './apiClient';

export const api = {
  getExampleData: () => apiClient.get('/example'),

  postExampleData: (data: string) => apiClient.post('/example', data),

  // 필요한 다른 API 함수들...
};
