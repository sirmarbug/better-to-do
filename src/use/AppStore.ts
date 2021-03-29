import { AppState } from '@/types'
import { Store, useStore } from 'vuex'

export type AppStore = Store<AppState>
export const useAppStore = (): AppStore => useStore<AppState>()
