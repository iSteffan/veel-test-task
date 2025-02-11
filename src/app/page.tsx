import { ToDoList } from '@/component/ToDoList/ToDoList';

export default function Home() {
  return (
    <section>
      <div className="w-full px-8 py-4 md:px-10 lg:px-12 bg-lemonBg gradient-bg">
        <ToDoList />
      </div>
    </section>
  );
}
