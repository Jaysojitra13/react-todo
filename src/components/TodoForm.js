import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../store/store';
import { addTodo, updateTodo } from '../store/actions/rootAction';

function TodoForm({ edit, onEdit }) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });

  const handleChange = e => {
    setInput(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    // dispatch add_todo
    if (input) {
      if (edit) {
        onEdit();
        store.dispatch({...updateTodo(), value: { input, id: edit.id }})
      } else {
        store.dispatch({...addTodo(), value: input})
      }
      setInput('')
    }
  };
 
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
    
      <input
        type='text'
        placeholder='Add note'
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
      />
      
      {
        edit ? (
            <button className='todo-button'> Update</button>
        ) : (
            <button className='todo-button'> Add Todo</button>
          
        )
      }
    </form>
  )
}

export default TodoForm;
