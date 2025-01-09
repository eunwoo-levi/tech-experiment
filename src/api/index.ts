import { apiClient } from './apiClient';
import type { User, CreateUserRequest } from './types';

// 모든 API 함수들을 하나의 객체로 관리
export const api = {
  // Users
  getUserInfo: () => apiClient.get<User>('/users'),

  createUser: (data: CreateUserRequest) => apiClient.post<User>('/users', data),

  getUser: (id: string) => apiClient.get<User>(`/users/${id}`),

  // Comments (예시)
  getComments: (postId: string) => apiClient.get(`/posts/${postId}/comments`),

  // 필요한 다른 API 함수들...
};
