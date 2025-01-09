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
