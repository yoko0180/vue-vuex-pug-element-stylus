import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const store =new Vuex.Store({
strict: process.env.NODE_ENV != 'production',
  state,
  getters,
  actions,
  mutations,
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {

    store.hotUpdate({
      getters: require('./getters').default,
      actions: require('./actions').default,
      mutations: require('./mutations').default,
    })
  })
}

export default store
