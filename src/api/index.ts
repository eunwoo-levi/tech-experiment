import { apiClient } from './apiClient';
import type { LoginRequest, LoginResponse, User } from './types';

export const api = {
  // Users
  getUserInfo: () => apiClient.get<User>('/users'),

  login: (data: LoginRequest): Promise<LoginResponse> => apiClient.post('/login', data),

  // 필요한 다른 API 함수들...
};
