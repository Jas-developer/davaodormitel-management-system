import { action, computed, makeObservable, observable } from "mobx";
import { Todo } from "../types/mobx";

class TodoStore {
  todos: Todo[] = [];

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  report() {
    if (this.todos.length === 0) {
      return "No task";
    }

    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "None sir"}."` +
      `Progress: ${this.completedTodosCount}/ ${this.todos.length}`
    );
  }

  //to add todo
  addTodo(task: string) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

const todoStore = new TodoStore();
todoStore.addTodo("name");
console.log(todoStore.todos);

// with mobx
class ObservableTodoStore {
  todos: Todo[] = [];
  pendingRequest = 0;

  constructor() {
    makeObservable(this, {
      todos: observable, //can change overtime
      pendingRequest: observable, //can change overtime
      completedTodosCount: computed,
      report: computed,
      addTodo: action,
    });
  }

  //will check all todo's that has been completed
  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  //report of current and end task
  get report() {
    if (this.todos.length === 0) {
      return "This is no todo for now";
    }
    //otherwise
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "There is no task"}"` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  //adding list
  addTodo(task: string) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    });
  }
}

const observableTodoStore = new ObservableTodoStore();

//observable - note that this can change overtime
//computed - this can be get from our state as
