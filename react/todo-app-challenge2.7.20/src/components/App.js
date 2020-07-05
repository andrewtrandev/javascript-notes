import React from 'react';
import { Container } from 'semantic-ui-react';
import { TodoStore } from '../contexts/TodoContext';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoStore>
      <Container>
        <TodoHeader />
        <TodoInput />
        <TodoList />
      </Container>
    </TodoStore>
  );
};

export default App;
