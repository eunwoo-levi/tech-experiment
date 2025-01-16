import { useMutation } from '@tanstack/react-query';
import { apiClient } from '../api/apiClient';

export function useExampleMutation() {
  return useMutation({
    mutationFn: async (data) => {
      const response = await apiClient.post('example', data);
      return response.data;
    },
    onError: (error) => {
      console.error('Error while performing mutation:', error.message);
    },
    onSuccess: (data) => {
      console.log('Mutation successful:', data);
    },
  });
}
