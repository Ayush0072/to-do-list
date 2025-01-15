import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import './components/style.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      //Date.now() --> gives us the number of milliseconds passed since jan 1 1970 , so we can use it as a unique id in our app.
      const newTaskObject = { id: Date.now(), text: newTask, completed: false };
      setTasks(tasks.concat(newTaskObject));  // Using .concat to add a new task
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: task.id, text: task.text, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewTask(taskToEdit.text);
    setEditingId(id);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === editingId) {
        return { id: task.id, text: newTask, completed: task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    setNewTask('');
    setEditingId(null);
  };

  return (
    <div className="app-container">
      <div className='header'>
        <Header />
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={editingId ? updateTask : addTask}>
          {editingId ? 'Update' : 'Add'}
        </button>
      </div>
      <ToDoList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
        onEdit={editTask}
      />
    </div>
  );
}

export default App;
