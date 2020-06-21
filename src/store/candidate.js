export default {
  namespaced: true,
  state: {
    candidate: {},
    contact: {},
    courses: [],
    questionnaire: {},
    family: {},
  },

  mutations: {
    setCandidate(state, payload) {
      state.candidate = payload
    },

    setContacts(state, payload) {
      state.contact = payload;
    },

    setCourses(state, payload) {
      state.courses = payload;
    },

    setQuestionnaire(state, payload) {
      state.questionnaire = payload;
    },

    setFamily(state, payload) {
      state.family = payload;
    },
  },

  actions: {
    setCandidate({
      commit
    }, payload) {
      commit('setCandidate', payload)
    },

    setContacts({
      commit
    }, payload) {
      commit('setContacts', payload)
    },

    setCourses({
      commit
    }, payload) {
      commit('setCourses', payload)
    },

    setQuestionnaire({
      commit
    }, payload) {
      commit('setQuestionnaire', payload)
    },

    setFamily({
      commit
    }, payload) {
      commit('setFamily', payload)
    },
  }
}