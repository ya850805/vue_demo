/*
使用localStorage存儲數據的工具模塊
向外暴露：
1.函數(1個功能)
2.物件(多個功能)
 */
const TODOS_KEY = "todos_key";
export default {

  saveTodos(todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  },
  readTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
  }
}
