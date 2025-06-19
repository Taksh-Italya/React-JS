import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../feuters/taskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [discription, setDiscription] = useState(task.discription);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, discription, status }));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div className="border rounded p-3 mb-3 bg-light">
          <h5>Edit Task</h5>
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </div>
          <div className="mb-2">
            <textarea
              className="form-control"
              value={discription}
              onChange={(e) => setDiscription(e.target.value)}
              rows="2"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="mb-3">
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
          <div className="d-flex gap-2">
            <button onClick={handleEdit} className="btn btn-success btn-sm">
              Save
            </button>
            <button onClick={() => setIsEdit(false)} className="btn btn-secondary btn-sm">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsEdit(true)} className="btn btn-outline-primary btn-sm">
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
