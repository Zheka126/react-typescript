import React, { useRef } from 'react';

interface ITodoFormWithUseState {
  onAdd(title: string): void;
}

export const TodoFormWithUseRef: React.FC<ITodoFormWithUseState> = ({
  onAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('TodoFormWithUseRef', inputRef.current!.value);
      onAdd(inputRef.current!.value);
      inputRef.current!.value = '';
    }
  };

  return (
    <div className="input-field todo-form">
      <input type="text" id="title" ref={inputRef} onKeyPress={keyPress} />
      <label htmlFor="title" className="active">
        Enter title of your task
      </label>
    </div>
  );
};
