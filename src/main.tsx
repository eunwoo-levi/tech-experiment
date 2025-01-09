import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

async function enableMocking() {
  // MSW 설정 (개발 환경에서만 실행)
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return worker.start();
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
