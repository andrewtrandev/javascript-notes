import React from 'react';

const TodoTask = (props) => {
  return (
    <>
      <div>{props.todo.text}</div>
    </>
  );
};

export default TodoTask;
