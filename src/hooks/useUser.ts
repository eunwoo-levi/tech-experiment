import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

export function useUserInfo() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await api.getUserInfo();
      return response.data;
    },
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ['user', id], // id별로 캐싱하기 위해 queryKey에 id 포함
    queryFn: async () => {
      const response = await api.getUser(id);
      return response.data;
    },
    enabled: !!id, // id가 있을 때만 쿼리 실행
  });
}
