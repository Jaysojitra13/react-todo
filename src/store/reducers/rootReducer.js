const initialState = {
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case 'add_todo':
      const newTodoObj = {
        id: Math.floor(Math.random() * 1000),
        text: action.value
      };
      const newTodos = [...state.todos, newTodoObj];
      return {
        ...state,
        todos: newTodos
      };
    case 'delete_todo':
      const updatedTodos = state.todos.filter(todo => todo.id !== action.value);
      return {
        ...state,
        todos: updatedTodos
      };
    case 'update_todo':
      for (let td of state.todos) {
        if (td.id === action.value.id) {
          td.text = action.value.input
        }
      }
      return {
        ...state
      };
    case 'reorder_todo':
      return {
        ...state,
        todos: action.value
      }
    case 'complete_todo':
      let completedTodos = state.todos.map(todo => {
        if (todo.id === action.value) {
          todo.isComplete = !todo.isComplete
        };
        return todo;
      });

      const foundCompletedTodoIndex = state.todos.findIndex(todo => todo.id === action.value && todo.isComplete);

      let newCompletedTodos = [];
      if (foundCompletedTodoIndex !== -1) {
        newCompletedTodos.push(completedTodos[foundCompletedTodoIndex]);
        completedTodos.splice(newCompletedTodos, 1);
      }
      completedTodos = [...completedTodos, ...newCompletedTodos];
      
      return {
        ...state,
        todos: completedTodos
      }
    default:
      return state;
  }
}

export default rootReducer;