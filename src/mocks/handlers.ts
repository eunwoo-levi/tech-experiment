import { http, HttpResponse } from 'msw';
import { CreateUserRequest, User } from '../api/types';
import { API_ENDPOINTS } from '../api/endpoints';

export const handlers = [
  http.get(API_ENDPOINTS.USERS, () => {
    return HttpResponse.json<User[]>(
      [
        {
          id: '1',
          firstName: 'lee',
          lastName: 'joo',
        },
      ],
      { status: 200 }
    );
  }),

  http.post(API_ENDPOINTS.USERS, async ({ request }) => {
    const body = (await request.json()) as CreateUserRequest;
    const { firstName, lastName } = body;

    if (!firstName || !lastName) {
      return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    return HttpResponse.json<User>(
      {
        id: '2',
        firstName,
        lastName,
      },
      { status: 201 }
    );
  }),
];
