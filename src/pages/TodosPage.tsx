import React, { useEffect, useState } from 'react';
import { TodoFormWithUseRef } from '../components/TodoFormWithUseRef';
import { TodoFormWithUseState } from '../components/TodoFormWithUseState';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  });

  const addTodo = (title: string) => {
    const newTodo: ITodo = { title: title, id: Date.now(), completed: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleCheck = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id: number) => {
    const shouldRemove = window.confirm('Are you sure you want to remove this');
    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  return (
    <>
      <TodoFormWithUseState onAdd={addTodo} />
      <TodoFormWithUseRef onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleCheck} onRemove={removeTodo} />
    </>
  );
};
