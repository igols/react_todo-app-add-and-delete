import React from 'react';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  handleDeleteTodo?: (id: number) => void;
};

export const TodoItem: React.FC<Props> = ({ todo, handleDeleteTodo }) => {
  return (
    <div data-cy="Todo" className={`todo ${todo.completed ? 'completed' : ''}`}>
      <label htmlFor={`${todo.id}`} className="todo__status-label">
        {}
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          id={`${todo.id}`}
          disabled={todo.isLoading}
          checked={todo.completed}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todo.title}
      </span>

      {/* Remove button appears only on hover */}
      <button
        autoFocus
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => handleDeleteTodo(todo.id)}
        disabled={todo.isLoading}
      >
        ×
      </button>

      {/* overlay will cover the todo while it is being deleted or updated */}
      <div
        data-cy="TodoLoader"
        className={`modal overlay ${todo.isLoading ? 'is-active' : ''}`}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};
