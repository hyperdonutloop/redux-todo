import styled from 'styled-components';

const Wrapper = styled.div`
  border: 2px solid blue;

  .input {
    background-color: rgb(235, 236, 240);
    font-family: monospace;
    color: rgb(74, 77, 92);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 0px, 
    rgb(255, 255, 255) 0px 0px 0px 0px, 
    rgba(0, 0, 0, 0.2) 5px 5px 10px 0px inset, 
    rgb(255, 255, 255) -5px -5px 10px 0px inset;
    outline: 0px;
    padding: 10px;
    border-radius: 10px;
    border-style: none;
  }

  .submit {
    border: 2px solid green;
    background-color: rgb(235, 236, 240);
    height: 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px 0px, rgb(255, 255, 255) -5px -5px 10px 0px;
    border-radius: 50px;
    border-style: none;
    outline: none;
    padding: 10px 30px;
    /* transition: all 0.2s ease 0s; */
    text-transform: uppercase;
    margin: 1.5rem;

  .submit:focus {
    background-color: blue;
  }
  }

`;

export default Wrapper;