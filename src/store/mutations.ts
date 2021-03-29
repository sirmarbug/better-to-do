import { MutationTree } from 'vuex'
import { AppState } from '@/types'

export const mutations: MutationTree<AppState> = {
  SET_LOADING (state, payload: boolean) {
    state.loading = payload
  }
}
