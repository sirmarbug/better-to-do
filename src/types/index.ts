export interface AppState {
  loading: boolean;
  auth?: AuthState;
}

export interface AuthState {
  user: User;
}

export interface User {
  [key: string]: any;
}

export interface UserForm {
  email: string;
  password: string;
  repeatPassword?: string;
}
