import "./AddToDo.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../Redux/actions/ToDoActions";
const AddToDo = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      dispatch(addtodo(task));
      setTask("");
    } else {
    }
  };
  return (
    <div className="container">
      <div className="drop">
        <div className="content">
          <h2> To DO List </h2>
          <form>
            <div className="inputBox">
              <input
                type="text"
                placeholder="Enter a Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="inputBox">
              <input type="submit" value="ADD" onClick={handleSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
