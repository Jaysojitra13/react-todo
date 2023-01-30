export const addTodo = () => {
  return {
      type: 'add_todo',
  };
};

export const deleteTodo = () => {
  return {
      type: 'delete_todo',
  };
};

export const updateTodo = () => {
  return {
      type: 'update_todo',
  };
};

export const reorderTodo = () => {
  return {
      type: 'reorder_todo',
  };
};

export const completeTodoAction = () => {
  return {
      type: 'complete_todo',
  };
};