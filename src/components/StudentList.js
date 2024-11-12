import React from 'react';

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div id="studentList">
      {students.map((student) => (
        <div key={student.id} style={{ padding: "10px", backgroundColor: "beige", margin: "5px" }}>
          학번: {student.id} / 이름: {student.name} / 나이: {student.age} / 번호: {student.phoneNumber}
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;