import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: 5,
    gridData: [],
    updateAction: null,
  },
  mutations: {
    changeGridSize(state, payload) {
      state.grid = payload;
      state.updateAction();
    },
    changeGridData(state, payload) {
      state.gridData = payload;
    },
    setUpdateAction(state,payload){
      state.updateAction = payload;
    }
  },
  actions: {
    changeGridSize({ commit }, payload) {
      commit('changeGridSize', payload);
    },
    changeGridData({ commit }, payload) {
      commit('changeGridData', payload);
    },
    setUpdateAction({ commit }, payload) {
      commit('setUpdateAction', payload);
    }
  }
});