import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import "./style.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-item" key={index}>
          <TaskItem task={task} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
