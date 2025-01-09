import { http, HttpResponse } from 'msw';
import { User } from '../api/types';

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5174';

export const handlers = [
  http.get(`${baseURL}/users`, () => {
    return HttpResponse.json<User>(
      {
        firstName: 'Seong',
        lastName: 'Eunwoo',
      },
      { status: 200 }
    );
  }),
];
