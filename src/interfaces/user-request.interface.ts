export interface CreateUserRequest {
  name: string;
  account: string;
  password: string;
}

export interface UpdateUserRequest {
  name?: string;
  account?: string;
  password?: string;
}
