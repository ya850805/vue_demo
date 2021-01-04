/**
 * 包含所有基於state的getter計算屬性的物件
 * */
export default {
  totalCount(state) {
    return state.todos.length;
  },
  completeCount (state) {
    return state.todos.filter(todo => todo.complete == true).length;
  },
  //判斷是否全部選中
  isAllSelect (state, getters) {
    return getters.totalCount === getters.completeCount && getters.totalCount > 0;
  }
}
