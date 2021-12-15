/** @format */
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}>
      <h3 className='task-head'>
        {task.text}
        <div className='icons'>
          <FaTimes className='delete-icon' onClick={() => onDelete(task.id)} />
        </div>
      </h3>
      <p>{task.remainder}</p>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
