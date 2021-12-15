/** @format */
import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className='add-item' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor=''>Task</label>
        <input
          type='text'
          placeholder='Input Task'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label htmlFor=''>Day & Time</label>
        <input
          type='text'
          placeholder='Input Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control set'>
        <label htmlFor=''>Set Reminder</label>
        <input
          type='checkbox'
          className='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input className='btn submit' type='submit' value='Save Task' />
    </form>
  );
};

export default AddTask;
