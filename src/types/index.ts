export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  user: User;
}

export interface User {
  [key: string]: any;
}
