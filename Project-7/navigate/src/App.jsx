import React, { useState, useEffect } from 'react';
import { FaBook, FaEdit } from 'react-icons/fa';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [
      { id: 1, title: "HTML", description: "Learn html" },
      { id: 2, title: "CSS", description: "Learn css" },
      { id: 3, title: "JQ", description: "Learn J-Query" },
      { id: 4, title: "Bootstrap", description: "Learn Bootstrap" },
    ];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setForm({ title: '', description: '' });
    setEditIndex(null);
    setShow(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!form.title || !form.description) return;

    if (editIndex !== null) {
      const updated = items.map((item, idx) =>
        idx === editIndex ? { ...item, ...form } : item
      );
      setItems(updated);
    } else {
      const newItem = {
        id: Date.now(),
        title: form.title,
        description: form.description
      };
      setItems([...items, newItem]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(items[index]);
    handleShow();
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, idx) => idx !== index);
    setItems(filtered);
  };

  return (
    <div className="bg-dark vh-100 p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="text-white d-flex align-items-center">
          <h3>REACT CRUD</h3>
        </div>
        <Button variant="warning" onClick={handleShow}>Add</Button>
      </div>

      <div className="bg-white rounded p-3">
        <Table bordered hover>
          <thead className="table-light">
            <tr>
              <th><FaBook /></th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td><FaBook /></td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>
                  <Button variant="outline-success" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                    <FaEdit />
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Add/Edit */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit Item" : "Add Item"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" name="title" value={form.title} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" value={form.description} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;