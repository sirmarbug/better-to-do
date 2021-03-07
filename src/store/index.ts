import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import { AppState } from '@/types'

export default createStore<AppState>({
  modules: {
    auth
  }
})
