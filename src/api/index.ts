import { UserForm } from '@/types'
import { auth } from '@/api/firebase'

export function createUser (user: UserForm) {
  return auth.createUserWithEmailAndPassword(user.email, user.password)
}

export function loginWithEmail (user: UserForm) {
  return auth.signInWithEmailAndPassword(user.email, user.password)
}

export function logout () {
  return auth.signOut()
}
