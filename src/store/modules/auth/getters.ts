import { GetterTree } from 'vuex'
import { AppState, AuthState } from '@/types'

export const getters: GetterTree<AuthState, AppState> = {
  getUser: state => state.user
}
