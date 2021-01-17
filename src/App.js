import React , { Component } from 'react';
import Todos from './todos';
import AddTodo from './addToDo';

class App extends Component{
  state = {
    todos: [
      {
        id: 1,
        content: 'Todo 1'
      },
      {
        id: 2,
        content: 'Todo2'
      }
    ]
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(t => t.id !== id);
    this.setState({todos});
  };

  addTodo = (state) => {
    const id = this.state.todos.length + 1;
    const tempTod = {
      id,
      content: state.content
    }
    const todos = [...this.state.todos, tempTod];
    // todos.push({
    //   id,
    //   content: state.content
    // });
    this.setState({ todos });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> My Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    );
  }
}

export default App;
