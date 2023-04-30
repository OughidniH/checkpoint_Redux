import React, { useState } from "react";
import Task from "./Task";
import "./Task.css";
import "./AddToDo.css";
const ListTask = ({ tasks }) => {
  // let createdAt = new Date().toDateString();

  const [filter, setFilter] = useState("All");
  console.log(filter);
  return (
    <>
      <div className="btns">
        <button onClick={() => setFilter("All")} className="btns All">
          All
        </button>
        <button onClick={() => setFilter("Complete")} className="btns Complete">
          Complete
        </button>
        <button
          onClick={() => setFilter("Incomplete")}
          className="btns Incomplete "
        >
          Incomplete
        </button>
      </div>
      <div className="sectionTask">
        {(filter === "Complete"
          ? tasks.filter((task) => task.isDone === true)
          : filter === "Incomplete"
          ? tasks.filter((task) => task.isDone === false)
          : tasks
        ).map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </>
  );
};

export default ListTask;
