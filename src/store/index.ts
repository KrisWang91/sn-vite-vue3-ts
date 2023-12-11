import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

export interface State {
  navTitle: string
  isShowNavBar: boolean
  tabActive: number
}
// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    isShowNavBar: true,
    navTitle: '',
    tabActive: 0,
  },
  mutations: {
    changeNavBarShow(state, isShow) {
      state.isShowNavBar = isShow
    },
    changeNavTitle(state, title) {
      state.navTitle = title
    },
    changeTabActive(state, active) {
      state.navTitle = active
    },
  },
  actions: {},
  modules: {},
})
