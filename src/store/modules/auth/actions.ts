import { ActionTree } from 'vuex'
import { AppState, AuthState, UserForm } from '@/types'
import { createUser, loginWithEmail, logout } from '@/api'
import { auth } from '@/api/firebase'
import { useRouter } from 'vue-router'
import firebase from 'firebase'
import User = firebase.User

export const actions: ActionTree<AuthState, AppState> = {
  async createUser ({ commit }, user: UserForm) {
    try {
      await createUser(user)
    } catch (e) {
      console.error(e)
    }
  },
  async loginWithEmail ({ state }, payload: UserForm) {
    try {
      await loginWithEmail(payload)
    } catch (e) {
      console.error(e)
    }
  },
  async logout ({ state }) {
    try {
      await logout()
    } catch (e) {
      console.error(e)
    }
  },
  async authState ({ state, commit }) {
    const router = useRouter()
    try {
      await auth.onAuthStateChanged((user: User | null) => {
        if (user) {
          commit('SET_USER', user.providerData[0])
          router.push({ name: 'Today' })
        } else {
          commit('SET_USER', null)
          router.push({ name: 'Login' })
        }
        console.log('authState', state.user)
      })
    } catch (e) {
      console.error(e)
    }
  }
}
