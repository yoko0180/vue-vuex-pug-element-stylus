import Vue from 'vue'

export default {
  offsetPoint ({ commit, state, getters, dispatch }, payload) {
    var p = state.point + payload, min = 0, max = 99
    if (p < min) p = min
    if (p > max) p = max
    commit('updateState', {'point': p})
  },
}
