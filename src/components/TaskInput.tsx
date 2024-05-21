import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');

  // Handles form submission and dispatches addTodo action
  const addTodoHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <div className="relative gap-4">
        <i className="fa-solid fa-plus absolute py-[18px] px-7 text-gray-500 font-semibold cursor-pointer"></i>
        <input
          type="text"
          className="rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 text-base outline-none text-black py-3 px-14 leading-6 transition-colors duration-200 ease-in-out w-full"
          placeholder="Add New Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
};

export default TaskInput;

