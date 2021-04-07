import firebase from 'firebase'
import UserInfo = firebase.UserInfo

export interface AppState {
  loading: boolean;
  auth?: AuthState;
}

export interface AuthState {
  user: UserInfo | null;
}

export interface UserForm {
  email: string;
  password: string;
  confirmPassword?: string;
}
