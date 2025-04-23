import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    price: "",
    language: "",
    img: ""
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updated = [...movies];
      updated[editingIndex] = formData;
      setMovies(updated);
      setEditingIndex(null);
    } else {
      setMovies([...movies, formData]);
    }
    setFormData({ name: "", type: "", price: "", language: "", img: "" });
  };

  const handleEdit = (index) => {
    setFormData(movies[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = movies.filter((_, i) => i !== index);
    setMovies(filtered);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-danger mb-4"> Book My Show</h1>

      <div className="card p-3 mb-4">
        <div className="row g-2">
          <div className="col-md">
            <input
              type="text-primary"
              className="form-control"
              placeholder="Movie Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              className="form-control"
              placeholder="Movie Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="col-md">
            <input
              
              className="form-control"
              placeholder="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              className="form-control"
              placeholder="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />
          </div>
          <div className="col-md">
            <input
              type="text"
              className="form-control"
              placeholder="Image URL"
              name="img"
              value={formData.img}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-1 d-grid">
            <button onClick={handleSubmit} className="btn btn-primary">
              {editingIndex !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={movie.img}
                className="card-img-top"
                alt={movie.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.name}</h5>
                <p className="card-text"> {movie.type}</p>
                <p className="card-text"> {movie.language}</p>
                <p className="card-text"> ₹{movie.price}</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

