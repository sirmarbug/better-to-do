import { auth } from './index'
import { UserForm } from '@/types'

export function createUser (user: UserForm) {
  return auth.createUserWithEmailAndPassword(user.email, user.password)
}

export function loginWithEmail (user: UserForm) {
  return auth.signInWithEmailAndPassword(user.email, user.password)
}
