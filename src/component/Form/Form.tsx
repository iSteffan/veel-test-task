import { useForm } from 'react-hook-form';

import data from '@/data/common.json';
import { Todo } from '@/hook/useTodosApi';

interface TodoFormProps {
  addTodo: (todo: Todo) => void;
  onClose: () => void;
}

export const Form = ({ addTodo, onClose }: TodoFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      completed: false,
    },
  });

  const isCompleted = watch('completed');

  const { form } = data;

  const onSubmit = (data: { title: string; completed: boolean }) => {
    const newTodo = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      ...data,
      userId: 1,
    };

    addTodo(newTodo);
    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
      <label className="relative flex flex-col">
        <span className="yellowText">{form.title}</span>
        <input
          {...register('title', { required: true })}
          className="border p-2 rounded"
          placeholder="Enter task title"
        />
        {errors.title && (
          <span className="absolute bottom-[-14px] left-0 text-red-400 text-[12px]">
            {form.error}
          </span>
        )}
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" {...register('completed')} className="hidden peer" />
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
        <span className="yellowText">{form.done}</span>
      </label>

      <button
        type="submit"
        className="yellowText border-around-yellow hover:bg-white transition-colors"
      >
        {form.addTask}
      </button>
    </form>
  );
};
