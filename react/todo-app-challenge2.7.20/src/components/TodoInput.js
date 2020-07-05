import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import TodoContext from '../contexts/TodoContext' 

const TodoInput = () => {
  const [inputText, setInputText] = useState('');
  const {addTodo } = useContext(TodoContext)
  // console.log(todoContext);
  
  const handleInput = (event) => {
    
    if (event.keyCode === 13) {
      //addtodo(inputtext);
    }
  
  };

  return (<Input placeholder="Add To-Do" onKeyUp={handleInput} onChange = {(e) => setInputText(e.target.value)} value = {inputText}/>);
};

export default TodoInput;
