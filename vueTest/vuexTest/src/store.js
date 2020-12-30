/*
* vuex的核心管理物件
* */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = { //初始化狀態
  count: 0
}

const mutations = {
  //增加的mutation
  INCREMENT() {
    state.count++;
  },
  //減少的mutation
  DECREMENT() {
    state.count--;
  },
}

//撰寫邏輯
const actions = {
  //增加的action
  increment({commit}) {
    //提交增加的mutation
    commit('INCREMENT');
  },

  //減少的action
  decrement({commit}) {
    commit('DECREMENT');
  },

  //帶條件的action
  incrementIfOdd({commit, state}) {
    if (state.count % 2 == 1) {
      commit('INCREMENT');
    }
  },

  //非同步的action
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT');
    }, 1000);
  }
}

const getters = {
  isEven(state) { //不需要調用，只需要讀取屬性值
    return state.count % 2 === 0 ? '偶數' : '奇數'
  }
}

export default new Vuex.Store({
  state, //狀態
  mutations, //包含多個更新state函數的物件
  actions, //包含多個對應事件回調函數的物件
  getters //包含多個getter計算屬性的物件
})
