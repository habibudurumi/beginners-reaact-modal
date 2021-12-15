/** @format */

import Task from "./Task";

const Tasks = ({ dailyTasks, deleteTask, toggleReminder }) => {
  return (
    <>
      <h2 className='task-lead'>Tasks</h2>
      {dailyTasks.length > 0 ? (
        dailyTasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          );
        })
      ) : (
        <h4
          style={{
            textAlign: "center",
            margin: "2rem auto",
            fontSize: "2rem",
            color: "red",
          }}>
          Soryy!!!
          <span style={{ display: "block", fontSize: "1rem", color: "green" }}>
            No task to show
          </span>
        </h4>
      )}
    </>
  );
};

export default Tasks;
