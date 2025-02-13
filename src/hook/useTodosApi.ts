import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const useTodosApi = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}?_limit=10`);
      setTodos(response.data);
    } catch {
      setError('Error loading tasks');
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (todo: { title: string; completed: boolean; userId: number }) => {
    try {
      const response = await axios.post(API_URL, todo);
      setTodos(prev => [...prev, response.data]);
    } catch {
      setError('Failed to add task');
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch {
      setError('Failed to delete task');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return { todos, loading, error, addTodo, deleteTodo, fetchTodos };
};
