import { useForm } from 'react-hook-form';

interface TodoFormProps {
  addTodo: (todo: { title: string; completed: boolean; userId: number }) => void;
  onClose: () => void;
}

export const Form = ({ addTodo, onClose }: TodoFormProps) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: '',
      completed: false,
    },
  });

  const onSubmit = (data: { title: string; completed: boolean }) => {
    addTodo({ ...data, userId: 1 });
    reset();
    onClose();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 border-around-yellow"
    >
      <label className="flex flex-col">
        Title:
        <input
          {...register('title', { required: true })}
          className="border p-2 rounded"
          placeholder="Enter task title"
        />
      </label>

      <label className="flex items-center gap-2">
        <input {...register('completed')} type="checkbox" className="w-4 h-4" />
        Completed
      </label>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};
