/**
 * 接收組件通知觸發mutation調用 間接更新狀態的物件
 * */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types';
import storageUtil from "../util/storageUtil";

export default {
  addTodo({commit}, todo) {
    // 提交mutation的請求
    commit(ADD_TODO, {todo}); //傳遞的數據使用物件封裝起來
  },
  deleteTodo({commit}, index) {
    commit(DELETE_TODO, {index});
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check});
  },
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED);
  },

  //異步獲取todos並更新狀態
  reqTodos ({commit}) {
    //模擬
    setTimeout(() => {
      // 1. 讀取數據
      const todos = storageUtil.readTodos();
      commit(RECEIVE_TODOS, todos);
    }, 1000);
  }
}
