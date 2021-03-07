import { MutationTree } from 'vuex'
import { AuthState, User } from '@/types'

export const mutations: MutationTree<AuthState> = {
  SET_USER (state, payload: User) {
    state.user = payload
  }
}
