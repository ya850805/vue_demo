/**
 * 接收組件通知觸發mutation調用 間接更新狀態的物件
 * */
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED} from './mutation-types';

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
  }
}
