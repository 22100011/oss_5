// components/StudentModal.js
import React, { useState, useEffect } from 'react';

const StudentModal = ({ isOpen, onClose, onSubmit, initialData = {}, isUpdateMode }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    age: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (isUpdateMode && initialData) {
      setFormData(initialData);
    } else {
      setFormData({ id: '', name: '', age: '', phoneNumber: '' });
    }
  }, [isOpen, initialData, isUpdateMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{isUpdateMode ? 'Update Student' : 'Add Student'}</h2>
        <form onSubmit={handleSubmit}>
          {!isUpdateMode && (
            <>
              <label>ID:</label>
              <input name="id" value={formData.id} onChange={handleChange} required />
            </>
          )}
          <br/><label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />

          <br/><label>Age:</label>
          <input name="age" type="number" value={formData.age} onChange={handleChange} required />

          <br/><label>Phone Number:</label>
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />

          <button type="submit">{isUpdateMode ? 'Update' : 'Add'}</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background-color: beige;
            padding: 20px;
            border-radius: 8px;
            width: 300px;
            max-width: 90%;
          }
        `}
      </style>
    </div>
  );
};

export default StudentModal;
