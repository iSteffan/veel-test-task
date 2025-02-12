import { useTodosApi } from '@/hook/useTodosApi';
import { ToDoCard } from '../ToDoCard/ToDoCard';

export const ToDoList = () => {
  const { todos, deleteTodo } = useTodosApi();

  return (
    <ul className="flex flex-col gap-y-4 items-center xl:grid xl:grid-cols-2 ">
      {todos.map(todo => (
        <li key={todo.id} className="w-full">
          <ToDoCard data={todo} deleteTodo={deleteTodo} />
        </li>
      ))}
    </ul>
  );
};
