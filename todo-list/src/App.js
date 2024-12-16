import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [todo, setTodo] = useState([]);

  const inputRef = useRef();

  const handleAdd = () => {
    const text = inputRef.current.value;
    if(text == ""){
      // alert("Please enter a to-do item!");
      return;
    }
    const newItem = { completed: false, text };
    setTodo([...todo, newItem]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleClick = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  const handleRemove = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (
    <div className="App">
      <h2>TO DO LIST</h2>
      <div className="container">
          <ul>
            {todo.map(({ text, completed }, index) => {
              return (
                <div className="todo-item">
                <li
                  key={index}
                  className={completed ? "done" : ""}
                  onClick={() => handleClick(index)}
                >
                  {text}
                </li>  
          <span onClick={() => handleRemove(index)}>❌</span>
          </div>
              );
            })}
          </ul>
        </div>
        <input ref={inputRef} placeholder="Enter item..." />
        <button onClick={handleAdd}>Add</button>
      </div>
  );
}

export default App;
