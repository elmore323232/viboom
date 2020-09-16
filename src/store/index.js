import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    moneyCounter: 50,
    followers: 0,
    viewers: 0,
    graphData: [10,30,50,60,90,100,160],
  },
  mutations: {
    updateCounter(state, counter) {
      state.moneyCounter = counter;
    },

    updateFollowers(state, counter) {
      state.followers = Math.floor(counter / Math.floor(Math.random() * Math.floor(50)));
    },

    
    updateViewers(state, counter) {
      state.viewers = Math.floor(counter / Math.floor(Math.random() * Math.floor(8)));
    },

    updateGraphData(state, counter) {
      for(let i = 0; i < 7; i++){
        if(i == 0) {
          state.graphData[i] = Math.floor(counter / Math.floor(Math.random() * Math.floor(100)));
        } else state.graphData[i] = Math.floor(counter / Math.floor(Math.random() * Math.floor(100))) + state.graphData[i-1];
      }
    }
  },
  actions: {
    changeStats(context, payload) {
      context.commit('updateCounter', payload);
      context.commit('updateFollowers', payload);
      context.commit('updateViewers', payload);
      context.commit('updateGraphData', payload);
    }
  },

  getters: {
    computedCounter(state) {
      return state.moneyCounter
    },

    getTodos: state => state.todos,
  },

  modules: {
  }
})
