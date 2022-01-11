import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import data from "./data.json";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  //state set initially to the data.json
  const [toDoList, setToDoList] = useState(data);

  //mapping over the array to toggle .strike on or off and creates a new array
  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      // we want to change the state of complete to true if it’s false

      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleFilter = () => {
    let filtered = toDoList.filter((task) => {
      return !task.complete;
    });
    setToDoList(filtered);
  };

  //This function takes in userInput that we gathered from our form component’s state. Make a copy of the toDoList so we don’t directly manipulate the state.
  //Next, reassign copy to a new array, with copy spread in and the new list item tagged on the end.

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false }
    ];
    setToDoList(copy);
  };

  return (
    <div className="App">
      <Header />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask} />
    </div>
  );
}

export default App;