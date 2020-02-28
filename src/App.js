import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddTodo from 'containers/AddTodo.js';
import VisibleTodoList from 'containers/VisibleTodoList.js';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">

        <AddTodo />
        <VisibleTodoList />
        <Footer />
      
    </div>
  );
}

export default App;
