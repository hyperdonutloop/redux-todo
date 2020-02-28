import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from 'containers/AddTodo.js';
import VisibleTodoList from 'containers/VisibleTodoList.js';
import Footer from 'components/Footer';
import Wrapper from 'styles/AppStyles.js';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <h1>To Do</h1>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Wrapper>
      
    </div>
  );
}

export default App;
