import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    text: ''
  });

  const submitEdit = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      text: ''
    })
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit}/>
  }

  return todos.map((todo, index) => (
    <div 
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    > 
      <div
        key={todo.id}
        onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div
        className='icons'>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='edit-icon'/>
          <TiEdit className='edit-icon' onClick={() => setEdit({ id: todo.id, text: todo.text })}/>
      </div>
    </div>
  ));
}

export default Todo
