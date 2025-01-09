import { http, HttpResponse } from 'msw';
import { CreateUserRequest, CreateUserResponse, User } from '../api/types';

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

  http.post(`${baseURL}/user`, async ({ request }) => {
    const body = (await request.json()) as CreateUserRequest;
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    return HttpResponse.json<CreateUserResponse>(
      {
        token: 'token1234',
        name: 'eunwoo',
        email: 'eunwoo1341@gmail.com',
      },
      { status: 201 }
    );
  }),
];
