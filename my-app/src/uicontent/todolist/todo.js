import React, { useState } from "react";

function Todoapp() {
  // State for storing the list of tasks and the current task input
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null);  // For tracking the task being edited
  const [editedTask, setEditedTask] = useState("");  // For storing the edited task

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(""); // Reset the input field
    }
  };

  // Edit a task
  const startEditing = (id, currentText) => {
    setEditingTaskId(id);
    setEditedTask(currentText);
  };

  const editTask = () => {
    if (editedTask.trim()) {
      setTasks(tasks.map(t => t.id === editingTaskId ? { ...t, text: editedTask } : t));
      setEditingTaskId(null);
      setEditedTask(""); // Reset edited task input field
    }
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>

      {/* Task Input and Add Button */}
      {!editingTaskId ? (
        <div>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            placeholder="Edit task"
          />
          <button onClick={editTask}>Save Changes</button>
        </div>
      )}

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => startEditing(task.id, task.text)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todoapp;