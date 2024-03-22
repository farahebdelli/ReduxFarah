import React from "react";
import { Card, Button } from "react-bootstrap";
import { done_task, delete_task } from "../../Redux/Actions/actions";
import { useDispatch } from "react-redux";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDone = (id) => {
    dispatch(done_task({ id }));
  };
  const handleDelete = (id) => {
    dispatch(delete_task({ id }));
  };

  return (
    <Card style={{ width: "18rem", marginBottom: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <Card.Body>
        <Card.Text>{task.description}</Card.Text>
        <Button
          variant={task.done ? "success" : "warning"}
          onClick={() => handleDone(task.id)}
          style={{ marginRight: "5px" }}
        >
          {task.done ? "Done" : "Note Done"}
        </Button>
        <Button variant="primary" style={{ marginRight: "5px" }}>Edit</Button>
        <Button variant="danger" onClick={() => handleDelete(task.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};
export default TaskItem;