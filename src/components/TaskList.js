import React from "react";
import Task from "./Task";
import { TASKS, CATEGORIES } from "../data";

function TaskList() {
  return (
    <div className="tasks">

      {TASKS.map((task, index) => (<Task text={task.text} category={CATEGORIES} index={index} />))}
      
    </div>
  );
}

export default TaskList;
