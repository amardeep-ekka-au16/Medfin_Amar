import React, { useState } from "react";
import styled from "styled-components";

function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  //  Every time a user types in the input box, the state will change to reflect the most recent input.
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };
  //When a user hits ‘Enter’ or clicks the ‘Submit’ button, this function will fire to add the task to the toDoList array.
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          value={userInput}
          type="text"
          onChange={handleChange}
          placeholder="Enter task..."
        />
        <button>Submit</button>
      </Form>
    </Container>
  );
}

export default ToDoForm;

const Form = styled("form")``;
const Container = styled("div")``;
