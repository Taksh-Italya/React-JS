import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from 'uuid';
import { addTask } from '../feuters/taskSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [status, setStatus] = useState('Todo');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      discription,
      status
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDiscription('');
    setStatus('Todo');
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4">
        <h2 className="text-center mb-4">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Task Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              placeholder="Enter task description"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
