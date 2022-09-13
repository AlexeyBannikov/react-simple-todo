import React from 'react';

import { ITodo } from '../@types/types';

type TodoListProps = {
  todos: ITodo[];
  toggleTodo(id: number): void;
  removeTodo(id: number): void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ['todo'];
        if (todo.isCompleted) {
          classes.push('completed');
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
              />
              <span>{todo.title}</span>
              <i className='material-icons red-text' onClick={() => removeTodo(todo.id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
