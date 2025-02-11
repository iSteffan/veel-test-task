'use client';

// import { useState } from 'react';

import { useTodosApi } from '@/hook/useTodosApi';
import { ToDoCard } from '../ToDoCard/ToDoCard';

export const ToDoList = () => {
  const { todos, loading, error, deleteTodo } = useTodosApi();

  return (
    <>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <ul className="flex flex-col gap-y-4 items-center">
          {todos.map(todo => (
            <li key={todo.id} className="w-full">
              <ToDoCard data={todo} deleteTodo={deleteTodo} />
            </li>
          ))}
        </ul>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
};
