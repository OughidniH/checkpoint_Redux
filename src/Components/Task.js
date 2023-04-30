import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  completetodo,
  edittodo,
  // deletetodo,
} from "../Redux/actions/ToDoActions";
import "./Task.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.description);

  const handleEdit = (e) => {
    e.preventDefault();

    let editedTask = {
      id: task.id,
      description: editValue,
      isDone: false,
    };
    dispatch(edittodo(editedTask));
    setIsEditing(false);
  };

 
  return (
    <>
      <div className="containerTask ">
        <div className={task.isDone ? "completed dropTask" : "dropTask"}>
          {isEditing ? (
            <form className="sytEdit">
              <textarea
                rows={5}
                cols={25}
                value={editValue}
                onChange={(e) => {
                  setEditValue(e.target.value);
                }}
              />
              <button onClick={handleEdit}>
                <CheckCircleOutlineIcon />
              </button>
            </form>
          ) : (
            <p className="descrp">
              {task.description}

              <button
                className="checkbtn"
                onClick={() => dispatch(completetodo(task))}
              >
                <CheckCircleOutlineIcon />
              </button>
            </p>
          )}
        </div>
        <div className="btnsTask">
          <button
            className="editbtn"
            onClick={() => {
              setIsEditing(true);
            }}
          >
            <EditCalendarIcon />
          </button>
          <button  className="deletebtn">
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
