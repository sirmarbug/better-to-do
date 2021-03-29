import { ActionTree } from 'vuex'
import { AppState, AuthState, UserForm } from '@/types'
import { createUser, loginWithEmail } from '@/firebase/api'

export const actions: ActionTree<AuthState, AppState> = {
  async createUser ({ commit }, user: UserForm) {
    try {
      const response = await createUser(user)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  },
  async loginWithEmail ({ state }, payload: UserForm) {
    try {
      const response = await loginWithEmail(payload)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
}
