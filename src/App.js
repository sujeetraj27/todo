import React, { useState } from 'react'
import './App.css';
import ToDoList from './components/ToDoList'

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofItems = () => {
    console.log(inputList);
    if (inputList === "") {
      alert("Add a Item must be filled out");
      return false;
    }
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }

  const deletItems = (id) => {
    console.log("deletItems")
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text"
          placeholder="Add a item"
          value={inputList}
          onChange={itemEvent} />
        <button onClick={listofItems}> + </button>
      </div>

      <ol>
        {items.map((itemval, index) => {
          return <ToDoList
            key={index}
            id={index}
            text={itemval}
            onSelect={deletItems}
          />
        })}
      </ol>

    </div>
  );
}

export default App;
