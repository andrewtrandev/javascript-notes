import React, { useContext } from 'react';
import { Header } from 'semantic-ui-react';
import TodoContext from '../contexts/TodoContext';
import TodoTask from './TodoTask';

const TodoList = () => {
  const { todoTasks } = useContext(TodoContext);
  const renderTodos = todoTasks.map((todo) => {
    return (
      <li key={todo.id}>
        <TodoTask todo={todo} />
      </li>
    );
  });

  return (
    <>
      <Header as="h2">Tasks:</Header>
      <ul>{renderTodos}</ul>
    </>
  );
};

export default TodoList;
