import React from 'react';
import CreateList from './CreateList.jsx';

const ToDoList = ({ todo, toggleTodo }) => {
  return todo.map(ele => (
    <CreateList key={ele.id} ele={ele} toggleTodo={toggleTodo} />
  ));
};

export default ToDoList;
