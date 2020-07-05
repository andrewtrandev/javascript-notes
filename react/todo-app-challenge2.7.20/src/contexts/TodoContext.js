import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoContext = React.createContext();

export const TodoStore = (props) => {
  const [todoTasks, setTodoTasks] = useState([
    { id: uuidv4(), text: 'Add tasks' },
  ]);

  const addTodo = (text) => {
    setTodoTasks((prevItems) => {
      return [{id : uuidv4(), text }, ...prevItems]
    })
  }

  return (
    <TodoContext.Provider value={{ todoTasks, addTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
