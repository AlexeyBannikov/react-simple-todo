import React from 'react';

import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { ITodo } from './@types/types';

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<ITodo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      isCompleted: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      }),
    );
  };

  const removeTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <div className='container'>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </>
  );
};

export default App;
