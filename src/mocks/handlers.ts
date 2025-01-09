import { http, HttpResponse } from 'msw';
import { LoginRequest, LoginResponse, User } from '../api/types';

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

  http.post(`${baseURL}/login`, async ({ request }) => {
    const body = (await request.json()) as LoginRequest;
    const { email, password } = body;

    if (!email || !password) {
      return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    return HttpResponse.json<LoginResponse>(
      {
        token: 'token1234',
        name: 'eunwoo',
        email: 'eunwoo1341@gmail.com',
      },
      { status: 201 }
    );
  }),
];
