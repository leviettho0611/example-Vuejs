import { createStore } from 'vuex';

export default createStore({
  state: {
    data: 'Hello, World!',
  },
  mutations: {
    updateData(state, newData) {
      state.data = newData;
    },
  },
  actions: {
    updateData({ commit }, newData) {
      commit('updateData', newData);
    },
  },
  getters: {
    getData: (state) => state.data,
  },
});
