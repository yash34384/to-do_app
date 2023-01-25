import React from 'react';
import './style.css';

const CreateList = ({ ele, toggleTodo }) => {
  function changeTodo() {
    toggleTodo(ele.id);
  }

  return (
    <div className="todo">
      <label>
        <input
          type="checkbox"
          checked={ele.done}
          className="check"
          onChange={changeTodo}
        />
        <span>{ele.name}</span>
      </label>
    </div>
  );
};

export default CreateList;
