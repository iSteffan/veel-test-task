'use client';

import { useTodosApi } from '@/hook/useTodosApi';
import { useState } from 'react';

export const ToDoList = () => {
  const { todos, loading, error, addTodo, deleteTodo } = useTodosApi();

  return (
    <div>
      <h2>ToDoList</h2>
      <div>
        <ul className="">
          {todos.map(todo => (
            <li key={todo.id} className="">
              <p>{todo.title}</p>
              <button onClick={() => deleteTodo(todo.id)} className="">
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
