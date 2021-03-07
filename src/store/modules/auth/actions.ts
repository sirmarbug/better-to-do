import { ActionTree } from 'vuex'
import { AppState, AuthState } from '@/types'

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
  }
}
