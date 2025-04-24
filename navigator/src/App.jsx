import React, { useState } from 'react';
import { FaBook, FaEdit } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';

const initialData = [
  { id: 1, title: 'JavaScript', description: 'JavaScript is among...' },
  { id: 2, title: 'Sass', description: 'Learn from' },
  { id: 3, title: 'React', description: 'Learn from react.js' },
  { id: 4, title: 'Node', description: 'Nodejs documentation' },
  { id: 5, title: 'EcmaScript', description: 'Learn from es6.org' },
  { id: 6, title: 'Angular', description: 'One framework Mobile...' },
];

export default function App() {
  const [data, setData] = useState(initialData);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title && description) {
      const newItem = {
        id: Date.now(),
        title,
        description,
      };
      setData([...data, newItem]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="bg-primary min-h-screen text-white p-5">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">REACT CRUD</h1>
      </div>

      <div className="mt-5 flex gap-3">
        <input
          type="text"
          placeholder="Title"
          className="form-control w-1/4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          className="form-control w-1/2"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-warning text-white font-bold">Add</button>
      </div>

      <div className="relative mt-5">
        <table className="table table-bordered bg-white text-black w-full">
          <thead className="text-primary">
            <tr>
              <th><FaBook /></th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
              <th><input type="checkbox" /></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td><FaBook /></td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td><FaEdit className="text-success cursor-pointer" /></td>
                <td><input type="checkbox" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
