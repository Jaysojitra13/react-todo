import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../store/store';
import { deleteTodo, updateTodo, reorderTodo, completeTodoAction } from '../store/actions/rootAction';

function TodoList() {
  const [todos, setTodos] = useState([]);

  function subscriber() {
    const state = store.getState();
    setTodos(state.todos)
  }
  store.subscribe(subscriber);

  const completeTodo = id => {
    store.dispatch({...completeTodoAction(), value: id});
  };

  const updateReorderedTodos = newTodos => {
    store.dispatch({...reorderTodo(), value: newTodos});
  }

  const removeTodo = id => {
    store.dispatch({...deleteTodo(), value: id});
  };

  return (
    <div>
      <h1>What's plan for today?</h1>
      {/* <TodoForm onSubmit={addTodo}/>
       */}
       <TodoForm />
      <Todo 
        todos={todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
        updateReorderedTodos={updateReorderedTodos}
        />
    </div>
  )
}

export default TodoList
