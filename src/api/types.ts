export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
}
