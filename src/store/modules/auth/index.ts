import { Module } from 'vuex'
import { AppState, AuthState } from '@/types'
import { state } from '@/store/modules/auth/state'
import { mutations } from '@/store/modules/auth/mutations'
import { actions } from '@/store/modules/auth/actions'

const auth: Module<AuthState, AppState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default auth
