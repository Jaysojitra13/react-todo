import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todolist = todos.length ? (
        // eslint-disable-next-line
        todos.map(todo => {
            return (
            <div className='collection-item' key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                <span>{todo.content}</span>
            </div>
            )
        })
    ) : (
        <p className="center">No todos Left, Enjoy!!! </p>
    )
    return (
        <div className='todos collection'>
            {todolist}
        </div>
    )
}

export default Todos;