// src/hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { api } from '../api';
import { LoginRequest, LoginResponse } from '../api/types';

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data) => api.login(data), // 로그인 API 호출
    onSuccess: (response) => {
      // 로그인 성공 시 처리 (예: 토큰 저장)
      localStorage.setItem('authToken', response.token);
      console.log('Logged in successfully:', response);
    },
    onError: (error) => {
      // 에러 처리
      console.error('Login failed:', error.message);
    },
  });
}
