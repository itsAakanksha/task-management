import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a Todo item
interface Todo {
  text: string;
  id: string; // Changed to string since nanoid generates string IDs
  completed: boolean;
}

// Define the type for the initial state
interface TodoState {
  todos: Todo[];
}

// Function to load todos from localStorage
const loadTodos = (): Todo[] => {
  const serializedState = localStorage.getItem('taskitem');
  if (serializedState) {
    return JSON.parse(serializedState);
  }
  return [
    {
      text: 'Complete Next Js course in this week',
      id: '1',
      completed: true,
    },
  ];
};

// Define the initial state for the todo slice
const initialState: TodoState = {
  todos: loadTodos(),
};

// Create a Redux slice named "todo" with reducers for managing todos
export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // Reducer for adding a new todo
    addTodo: (state, action: PayloadAction<string>) => {
      // Create a new todo object with the provided text and a unique ID
      const todo: Todo = {
        text: action.payload,
        id: nanoid(), // Generate a unique ID using nanoid
        completed: false, // New todos are initially marked as incomplete
      };
      // Add the new todo to the state's todos array (mutating the state)
      state.todos.push(todo);
    },

    // Reducer for removing a todo
    removeTodo: (state, action: PayloadAction<string>) => {
      // Filter the todos array to keep only todos with IDs that don't match the provided ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Reducer for toggling the completed state of a todo
    toggleTodo: (state, action: PayloadAction<string>) => {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload);

      // If the todo is found, update its completed property to the opposite of its current value
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed;
      }
    },
  },
});

// Extract the action creators from the todoSlice
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
