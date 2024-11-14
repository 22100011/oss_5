// App.js
import React, { useState } from 'react';
import ReadStudents from './components/ReadStudent';
import StudentModal from './components/StudentModal';
import createStudent from './components/CreateStudent';
import updateStudent from './components/UpdateStudent';
import deleteStudent from './components/DeleteStudent';

const App = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [currentStudent, setCurrentStudent] = useState(null);

  const fetchStudents = async () => {
    const response = await fetch('https://6729f62b6d5fa4901b6f276b.mockapi.io/api/v1/students');
    const data = await response.json();
    setStudents(data);
  };

  const handleAddStudent = () => {
    setIsUpdateMode(false);
    setCurrentStudent(null);
    setIsModalOpen(true);
  };

  const handleEditStudent = (student) => {
    setIsUpdateMode(true);
    setCurrentStudent(student);
    setIsModalOpen(true);
  };

  const handleModalSubmit = (formData) => {
    if (isUpdateMode) {
      updateStudent(formData.id, formData, fetchStudents);
    } else {
      createStudent(formData, fetchStudents);
    }
    setIsModalOpen(false);
  };

  const handleDeleteStudent = (id) => {
    deleteStudent(id, fetchStudents);
  };

  return (
    <div>
      <h1>학생 관리 시스템</h1>
      <button onClick={handleAddStudent}>Add Student</button>
      <ReadStudents
        students={students}
        fetchStudents={fetchStudents}
        onEdit={handleEditStudent}
        onDelete={handleDeleteStudent}
      />
      {isModalOpen && (
        <StudentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          initialData={currentStudent}
          isUpdateMode={isUpdateMode}
        />
      )}
    </div>
  );
};

export default App;
