import {observable, computed, action} from 'mobx';
class Todo {
  id = Math.random();
  @observable title;
  @observable finished = false;

  constructor(title) {
    this.title = title  
  }
}
class TodoList {
  @observable todos = []
  // state 读 写
  // action 允许修改值
  @action
  addTodo = title => {
    if(!title) return ;
    this.todos.push(new TodoList(title))
  }
}

const store = new TodoList()
export default store;