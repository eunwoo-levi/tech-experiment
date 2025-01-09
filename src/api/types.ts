export interface User {
  firstName: string;
  lastName: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  token: string;
  name: string;
  email: string;
}
