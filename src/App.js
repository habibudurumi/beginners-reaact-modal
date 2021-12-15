/** @format */
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:500/dailyTasks");
    const data = await res.json();
    return data;
  };
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:500/dailyTasks/${id}`);
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:500/dailyTasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:500/dailyTasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  const toggleReminder = async (id) => {
    const toggleTask = await fetchTask(id);
    const updatedTask = { ...toggleTask, reminder: !toggleTask.reminder };

    const res = await fetch(`http://localhost:500/dailyTasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task,
      ),
    );
  };
  return (
    <BrowserRouter>
      <div className='container'>
        <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
        {showAdd && <AddTask onAdd={addTask} />}

        <Routes>
          <Route
            exact
            path='/'
            element={
              <Tasks
                dailyTasks={tasks}
                deleteTask={deleteTask}
                toggleReminder={toggleReminder}
              />
            }
          />
          <Route exact path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
