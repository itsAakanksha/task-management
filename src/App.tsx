import { FC } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

const App: FC = () => {
  return (
    <div className="sm:m-8 m-2">
      <h1 className="text-4xl text-center font-bold">Task Management App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
