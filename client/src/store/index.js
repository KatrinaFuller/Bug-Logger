import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: 'https://localhost:3000/api'
})

export default new Vuex.Store({
  state: {
    bugs: [],
    bugDetail: {}
  },
  mutations: {
    setBugs(state, bugs) {
      state.bugs = bugs
    }
  },
  actions: {
    getBugs({ commit }) {
      api.get('bugs')
        .then(res => {
          commit('setBugs', res.data)
        })
    },

    async addBug({ commit, dispatch }, data) {
      try {
        let res = await api.post('/bugs', data)
        dispatch("getBugs");
      } catch (error) {
        console.error("store.js addBug")
      }
    }
  }
})
