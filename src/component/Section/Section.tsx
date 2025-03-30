import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  todos: Todo[];
  handleDeleteTodo?: (id: number) => void;
  tempTodo?: Todo | null;
  loading?: boolean;
};

export const Section: React.FC<Props> = ({
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
        />
      ))}
      {tempTodo && loading && (
        <TodoItem
          key={tempTodo.id}
          handleDeleteTodo={handleDeleteTodo}
          todo={tempTodo}
          loading={loading}
        />
      )}
    </section>
  );
};
