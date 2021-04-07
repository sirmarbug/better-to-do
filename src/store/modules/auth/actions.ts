import { ActionTree } from 'vuex'
import { AppState, AuthState, UserForm } from '@/types'
import { createUser, loginWithEmail } from '@/api'
import { auth } from '@/api/firebase'
import firebase from 'firebase'
import User = firebase.User

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
  },
  async authState ({ commit }) {
    try {
      await auth.onAuthStateChanged((user: User | null) => {
        if (user) {
          commit('SET_USER', user.providerData[0])
        } else {
          commit('SET_USER', null)
        }
      })
    } catch (e) {
      console.error(e)
    }
  }
}
