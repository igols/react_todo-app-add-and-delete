import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  handleDeleteTodo: (id: number) => void;
  tempTodo?: Todo | null;
  loadingId: number[];
  setLoading?: () => void;
  loading: boolean;
};

export const Section: React.FC<Props> = ({
  loadingId,
  tempTodo,
  todos,
  handleDeleteTodo,
  loading,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {/* This is a completed todo */}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          handleDeleteTodo={handleDeleteTodo}
          todo={todo}
          loadingId={loadingId}
        />
      ))}
      {tempTodo && loading && (
        <TodoItem
          key={tempTodo.id}
          todo={tempTodo}
          handleDeleteTodo={handleDeleteTodo}
          loading={loading}
          loadingId={[]}
        />
      )}
    </section>
  );
};
