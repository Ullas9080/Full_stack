import React, { useState } from "react";
import { addTask } from "../features/tasks/taskSlice.jsx";
import { Button, Input } from "@mui/material";
import { useDispatch } from "react-redux";
const AddTask = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleText = (e) => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("")
  };
  return (
    <form onSubmit={handleText}>
      <Input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        color="info"
      />
      <Button variant="contained" type="submit">Add</Button>
    </form>
  );
};

export default AddTask;
