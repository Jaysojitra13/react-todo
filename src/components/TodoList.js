import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || todo.text.trim() === '') {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      };
      return todo;
    });

    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || newValue.text.trim() === '') {
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item )));
  };

  const removeTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos)
  };

  return (
    <div>
      <h1>What's plan for today?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo 
        todos={todos}
        completeTodo = {completeTodo}
        removeTodo = {removeTodo}
        updateTodo = {updateTodo}
        />
    </div>
  )
}

export default TodoList
