import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, fetchTodo } from "../feuters/taskSlice";
import EditTask from "./EditTask";

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  if (loading) return <div className="text-center mt-5">Tasks loading...</div>;
  if (error) return <div className="text-danger text-center mt-5">There is an error: {error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Task List</h2>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-6 mb-4" key={task.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                {task.discription && <p className="card-text">{task.discription}</p>}
                <p><strong>Status:</strong> {task.status}</p>
                <div className="d-flex gap-2">
                  <EditTask task={task} />
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasklist;
