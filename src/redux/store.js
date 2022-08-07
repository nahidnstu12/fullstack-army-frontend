import { createStore, action, computed } from 'easy-peasy';

export const store = createStore({
    todos: [{ id: 1, text: 'Learn easy peasy', done: true }],
    completedTodos: computed((state) => state.todos.filter((todo) => todo.done)),

  addTodo: action((state, payload) => {
    state.todos.push({ text: payload, done: false });
  }),
});

// export default store