import { useMutation } from '@tanstack/react-query';
import { api } from '../api';
import { LoginRequest, LoginResponse } from '../api/types';

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: (data) => api.login(data),
    onSuccess: (response) => {
      // 로그인 성공 시 토큰 저장
      localStorage.setItem('authToken', response.token);
      console.log('Logged in successfully:', response);
    },
    onError: (error) => {
      const errorMessage = error.message || 'An unexpected error occurred. Please try again.';
      alert(`Login failed: ${errorMessage}`);
      console.error('Login failed:', error.message);
    },
  });
}
