import React, { useState } from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  if (!todos.length) {
    return (
      <p
        className="center"
        style={{ color: 'rgba(0, 0, 0, 0.4)', marginTop: '5rem' }}
      >
        Nothing to do
      </p>
    );
  }
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            key={todo.id}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className={`material-icons ${hovered ? 'red-text' : ''}`}
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}
                onClick={() => onRemove(todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
