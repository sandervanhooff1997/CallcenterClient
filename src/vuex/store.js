import Vue from 'vue'
import Vuex from 'vuex'
import AxiosInstance from './axios-config'

import CallModule from './modules/call'
import CompanyModule from './modules/company'
import ProductModule from './modules/product'
import SubscriptionModule from './modules/subscription'
import EmployeeModule from './modules/employee'
import AuthModule from './modules/auth'
import MessageModule from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
  },
  getters: {
    loading(state) {
      return state.loading
    }
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading
    }
  },
  actions: {
    setLoading({ commit }, loading) {
      commit('setLoading', loading)
    }
  },
  modules: {
    CallModule,
    CompanyModule,
    ProductModule,
    SubscriptionModule,
    EmployeeModule,
    AuthModule,
    MessageModule
  }
})
