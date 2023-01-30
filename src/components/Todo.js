import React, { useState } from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { store } from '../store/store';

function Todo({ todos, completeTodo, removeTodo, updateTodo, updateReorderedTodos }) {

  const [edit, setEdit] = useState({
    id: null,
    text: ''
  });

  const submitEdit = value => {
    setEdit({
      id: null,
      text: ''
    })
  };

  if (edit.id) {
    return <TodoForm edit={edit} onEdit={submitEdit}/>
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    
    const newReorderedTodos = reorder(
      todos,
      result.source.index,
      result.destination.index
    );

    updateReorderedTodos(newReorderedTodos);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {
          (provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {
              todos.map((todo, index) => (
                <Draggable draggableId={todo.id.toString()} index={index} key={todo.id}>
                  {
                    (provided) => (
                      <div 
                        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
                        key={index}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
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
                    )
                  }
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
          )
        }
      </Droppable>
    </DragDropContext>
  )

}

export default Todo
