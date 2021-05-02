import React , { Component } from 'react';
import Todos from './todos';
import AddTodo from './addToDo';
import { connect } from 'react-redux';
class App extends Component{

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    const {todos} = this.props;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> My Todo's </h1>
        <Todos todos={todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo ></AddTodo>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch({ type: 'DELETE_TODO', value: id })}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
