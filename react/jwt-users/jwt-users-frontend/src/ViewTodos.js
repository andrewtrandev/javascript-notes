import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewTodos = ({ userToken }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${userToken}`,
    };
    axios.get(`http://localhost:3000/todos`).then((res) => setTodos(res.data));
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.title}>{todo.title}</li>
      ))}
    </div>
  );
};

export default ViewTodos;
