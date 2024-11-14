import React, { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import Modal from './components/Modal';
import { getStudents, deleteStudent } from './components/StudentCRUD';

function App() {
  const [students, setStudents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const openModal = (student = null) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedStudent(null);
    setModalVisible(false);
    fetchStudents(); // 데이터 새로고침
  };

  const handleDelete = async (id) => {
    const success = await deleteStudent(id);
    if (success) {
      alert("삭제 성공!");
      fetchStudents(); // 데이터 새로고침
    } else {
      alert("삭제 실패!");
    }
  };

  return (
    <div>
      <h1>학생 관리</h1>
      <button onClick={() => openModal()}>Add Student</button>
      <StudentList students={students} onEdit={openModal} onDelete={handleDelete} />
      {modalVisible && (
        <Modal student={selectedStudent} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;