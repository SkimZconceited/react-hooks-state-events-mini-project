import React, { useState } from "react";

function Task({ text, category, index }) {
  // console.log(category)
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    setIsVisible(false)
    if(!isVisible) {
      console.log(isVisible)
    } else {
      console.log('What did you think1, its ', isVisible)
    }
    // const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // setTasks(updatedTasks);
  };

  console.log(isVisible);
  return (
    <>
      {isVisible && (
        <div className="task" key={index+1}>
          <div className="label" key={index+2} >
            <select>
            <option value={category} key={category}>{category}</option>
            {/* <option value={category[1]}>{category[1]}</option>
            <option value={category[2]}>{category[2]}</option>
            <option value={category[3]}>{category[3]}</option>
            <option value={category[4]}>{category[4]}</option> */}
            {/* <option value={category}>{category}</option> */}
              {/* <option value={categories[0]}>{categories[0]}</option> */}
            </select>
          </div>

          <div className="text" key={index}>{text}</div>

          <button className="delete" onClick={handleDelete} key={index+3} >
            X
          </button>
        </div>
      )}
    </>
  );
}

export default Task;
