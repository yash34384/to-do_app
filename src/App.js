import './style.css';
import React, { useRef } from 'react';
import ToDoList from './ToDoList.jsx';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'yashtodo.todo';

function getAllData() {
  const allList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (allList) {
    return allList;
  }
  else {
    return [];
  }
}

const App = () => {

  const [todo, list] = useState(getAllData());
  const newToDo = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todo));
  }, [todo]);

  function addToDo() {
    const nameOfTodo = newToDo.current.value;
    if (!nameOfTodo) return;
    list((prev) => {
      return [...prev, { id: uuidv4(), name: nameOfTodo, done: false }]
    })
    newToDo.current.value = null;
  }

  function removeToDo() {
    const newList = [...todo];
    const temp = newList.filter(ele => !ele.done);
    list(temp);
  }

  function toggleTodo(id) {
    const newList = [...todo];
    const temp = newList.find(ele => ele.id === id)
    temp.done = !temp.done;
    list(newList);
  }

  return (
    <>
      <div className="heading">TO-DO LIST</div>
      <input type="text" className='buttons' ref={newToDo} />
      <button onClick={addToDo}>ADD</button>
      <button onClick={removeToDo}>REMOVE</button>
      <div className="complete">{todo.filter(ele => !ele.done).length} Task Left</div>
      <ToDoList todo={todo} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
