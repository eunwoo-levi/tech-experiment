import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../api/apiClient';

export function useExampleQuery() {
  return useQuery({
    queryKey: ['example'],
    queryFn: async () => {
      const response = await apiClient.get('example');
      return response.data;
    },

    staleTime: 5 * 60 * 1000, // 5분 동안 데이터가 신선하다고 간주
  });
}
