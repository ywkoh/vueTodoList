import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    model: JSON.parse(sessionStorage.getItem('todoModel')) || {}
  },
  mutations,
  actions,
  plugins
})
