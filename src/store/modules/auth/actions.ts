import { ActionTree } from 'vuex'
import { AppState, AuthState, UserForm } from '@/types'
import { auth } from '@/firebase'

const fakeApi = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ username: 'adamkowski' })
    }, 1000)
  })
}

export const actions: ActionTree<AuthState, AppState> = {
  async fetchUser ({ commit }) {
    try {
      const response = await fakeApi()
      commit('SET_USER', response)
    } catch (e) {
      console.error(e)
    }
  },
  async createUser ({ commit }, user: UserForm) {
    try {
      const response = await auth.createUserWithEmailAndPassword(user.email, user.password)
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }
}
