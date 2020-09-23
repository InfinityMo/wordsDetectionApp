import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {
      code: ''
    },
    meta: {}
  },
  getters: {
    path: state => state.path,
    meta: state => state.meta,
    userCode: state => state.userInfo.code
  },
  mutations: {
    setCode: (state, code) => {
      state.userInfo.code = code
    },
    UPDATE_PATH (state, path) {
      state.path = path
    },
    UPDATE_META (state, meta) {
      state.meta = meta
    }
  }
})
