import { apiClient } from './apiClient';
import { API_ENDPOINTS } from './endpoints';
import type { User, CreateUserRequest } from './types';

// 모든 API 함수들을 하나의 객체로 관리
export const api = {
  // Users
  getUsers: () => apiClient.get<User[]>(API_ENDPOINTS.USERS),

  createUser: (data: CreateUserRequest) => apiClient.post<User>(API_ENDPOINTS.USERS, data),

  getUser: (id: string) => apiClient.get<User>(`${API_ENDPOINTS.USERS}/${id}`),

  // Posts (예시)
  getPosts: () => apiClient.get('/posts'),

  // Comments (예시)
  getComments: (postId: string) => apiClient.get(`/posts/${postId}/comments`),

  // 필요한 다른 API 함수들...
};
