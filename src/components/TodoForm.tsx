import React from 'react';

type TodoFormProps = {
  addTodo(title: string): void;
};

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = React.useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && title) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <div className='input'>
      <input
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        value={title}
        type='text'
        id='title'
        placeholder='Введите название дела'
      />
      {title && (
        <button className='plus' onClick={() => addTodo(title)}>
          +
        </button>
      )}
    </div>
  );
};

export default TodoForm;
