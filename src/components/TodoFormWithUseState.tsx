import React, { useState } from 'react';

interface ITodoFormWithUseState {
  onAdd(title: string): void;
}

export const TodoFormWithUseState: React.FC<ITodoFormWithUseState> = ({
  onAdd,
}) => {
  const [title, setTitle] = useState<string>('');

  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('TodoFormWithUseState', title);
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="input-field todo-form">
      <input
        type="text"
        id="title"
        value={title}
        onChange={changeTitle}
        onKeyPress={keyPress}
      />
      <label htmlFor="title" className="active">
        Enter title of your task
      </label>
    </div>
  );
};
