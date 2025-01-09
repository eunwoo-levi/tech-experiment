import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './route.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

async function enableMocking() {
  // MSW 설정 (개발 환경에서만 실행)
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분 동안 데이터 신선 상태 유지
      refetchOnWindowFocus: false, // 창 포커스 시 재요청 비활성화
      retry: 2, // 요청 실패 시 최대 2번 재시도
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 30000), // 재시도 지수 증가
      refetchOnReconnect: true, // 네트워크 재연결 시 데이터 요청
    },
    mutations: {
      retry: 1, // 뮤테이션 실패 시 1번 재시도
    },
  },
});

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
});
