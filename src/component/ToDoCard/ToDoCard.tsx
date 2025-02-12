import { useState } from 'react';

import { Todo } from '@/hook/useTodosApi';

import textData from '@/data/common.json';

export interface ToDoCardProp {
  data: Todo;
  deleteTodo: (id: number) => void;
}

export const ToDoCard = ({ data, deleteTodo }: ToDoCardProp) => {
  const [isCompleted, setIsCompleted] = useState(data.completed);

  return (
    <div
      className="p-4 mx-auto flex flex-col justify-between max-w-[400px] h-[100px] border-around-yellow bg-darkBg 
    md:h-[110px]"
    >
      <p
        className={`yellowText transition-opacity ${isCompleted ? 'line-through opacity-50' : ''}`}
      >
        {data.title}
      </p>

      <div className="ml-auto flex">
        <label className="mr-4 flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(prev => !prev)}
            className="hidden peer"
          />

          <div
            className={`w-5 h-5 border-2 border-accentYellow rounded-md flex items-center justify-center transition-all ${
              isCompleted ? 'bg-accentYellow' : ''
            }`}
          >
            {isCompleted && (
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            )}
          </div>

          <span className="yellowText">{textData.done}</span>
        </label>

        <button
          type="button"
          onClick={() => deleteTodo(data.id)}
          className="p-1 yellowText border-around-yellow hover:bg-white transition-colors"
        >
          {textData.delete}
        </button>
      </div>
    </div>
  );
};
