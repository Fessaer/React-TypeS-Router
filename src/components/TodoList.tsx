import React from 'react';
import { ITodo } from '../interfaces';

type TodoListProps = {
  todos: ITodo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}


export const TodoList:React.FC<TodoListProps> = ({ todos, onRemove, onToggle }) => {

  const onRemoveHandler = (
    event: React.MouseEvent,
    id: number
  ) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          className={todo.completed ? "todo completed" : "todo"}
          key={todo.id}
        >
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            <span>{todo.title}</span>
            <i
              className="material-icons red-text"
              onClick={(event) => onRemoveHandler(event, todo.id)}
            >
              delete
            </i>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default TodoList
