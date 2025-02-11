import { Todo } from '@/hook/useTodosApi';

export interface ToDoCardProp {
  data: Todo;
  deleteTodo: (id: number) => void;
}

export const ToDoCard = ({ data, deleteTodo }: ToDoCardProp) => {
  return (
    <div className="max-w-[400px] border bg-slate-400">
      <p>{data.title}</p>
      <button
        onClick={() => deleteTodo(data.id)}
        className="w-[40px] h-[40px] border rounded-[50%]"
      >
        ❌
      </button>
    </div>
  );
};
