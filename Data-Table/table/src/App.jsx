import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@gmail.com', username: 'johnny' },
    { id: 2, name: 'Jane Smith', email: 'jane@gmail.com', username: 'jane_s' },
    { id: 3, name: 'Mike Ross', email: 'mike@gmail.com', username: 'miker' },
  ]);

  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', username: '' });

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setForm({ name: '', email: '', username: '' });
    setEditIndex(null);
    setShow(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = users.map((user, idx) =>
        idx === editIndex ? { ...user, ...form } : user
      );
      setUsers(updated);
    } else {
      setUsers([...users, { id: users.length + 1, ...form }]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(users[index]);
    handleShow();
  };

  const handleDelete = (index) => {
    const filtered = users.filter((_, idx) => idx !== index);
    setUsers(filtered);
  };

  return (
    <div className="bg-dark vh-100 p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="text-white d-flex align-items-center">
          <h3>Data Table</h3>
        </div>
        <Button variant="warning" onClick={handleShow}>Add User</Button>
      </div>

      <div className="bg-white rounded p-3">
        <Table bordered hover>
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gmail</th>
              <th>Username</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>
                  <Button variant="outline-success" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                    Edit
                  </Button>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Modal for Add/Edit */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gmail</Form.Label>
              <Form.Control type="email" name="email" value={form.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={form.username} onChange={handleChange} />
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

