// src/components/Modal.js
import React, { useState, useEffect } from 'react';
import { createStudent, updateStudent } from '../services/StudentService';

function Modal({ student, onClose }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    if (student) {
      setId(student.id);
      setName(student.name);
      setAge(student.age);
      setPhoneNumber(student.phoneNumber);
    } else {
      setId('');
      setName('');
      setAge('');
      setPhoneNumber('');
    }
  }, [student]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student) {
      await updateStudent(id, { name, age, phoneNumber });
    } else {
      await createStudent({ id, name, age, phoneNumber });
    }
    onClose();
  };

  return (
    <div className="modal-overlay" style={{ display: 'flex' }}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <label>ID:</label><br />
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} disabled={!!student} required /><br />
          <label>Name:</label><br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /><br />
          <label>Age:</label><br />
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required /><br />
          <label>Phone:</label><br />
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required /><br />
          <button type="submit">{student ? "Update Student" : "Add Student"}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;