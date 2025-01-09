import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser.js');

  return worker.start({
    onUnhandledRequest: (request, print) => {
      if (!request.url.includes('/api/')) {
        console.log('/api/ 가 포함되지 않은 요청 url', request.url);
        return;
      }

      // 그 외의 처리되지 않은 요청에 대해서는 경고 출력
      print.warning();
    },
  });
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
});
