import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'actions';

import AddTodoStyles from 'styles/AddTodoStyles.js';
import Wrapper from 'styles/AddTodoStyles.js';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <Wrapper>
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <input className="input" ref={node => input = node} />
          <button className="submit" type="submit">
            Add Todo!
          </button>
        </form>
      </div>
  </Wrapper>
  )
};

export default connect()(AddTodo);