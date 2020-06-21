import Vue from 'vue'
import Vuex from 'vuex'
import candidate from './candidate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    candidate,
  }
})

export default store