const initialState = {
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
}

const rootReducer = (state = initialState, action) => {
  if (action.type === 'DELETE_TODO') {
    const newTodos = state.todos.filter(td => td.id !== action.value);
    console.log(newTodos)
    return {
      ...state,
      todos: newTodos
    }
  }

  if (action.type === 'ADD_TODO') {
    const newTodos = [...state.todos, action.value];
    return {
      ...state,
      todos: newTodos
    }
  }

  return state
}

export default rootReducer;