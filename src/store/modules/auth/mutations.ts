import { MutationTree } from 'vuex'
import { AuthState } from '@/types'
import firebase from 'firebase'
import UserInfo = firebase.UserInfo

export const mutations: MutationTree<AuthState> = {
  SET_USER (state, payload: UserInfo | null) {
    state.user = payload
  }
}
