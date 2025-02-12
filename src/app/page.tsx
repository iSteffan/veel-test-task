'use client';

import { useEffect, useState } from 'react';

import { ToDoList } from '@/component/ToDoList/ToDoList';
import { Loader } from '@/component/Loader/Loader';

import { useTodosApi } from '@/hook/useTodosApi';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error } = useTodosApi();

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [loading]);

  return (
    <section>
      <div className="w-full px-8 py-4 md:px-10 lg:px-12 ">
        {isLoading ? <Loader /> : <ToDoList />}

        {error && <p className="text-red-500">{error}</p>}
      </div>
    </section>
  );
}
