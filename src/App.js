import React from "react";
import "./App.css";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
function App() {
  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
