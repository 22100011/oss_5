// components/ReadStudents.js
import React, { useEffect } from 'react';

const ReadStudents = ({ students, fetchStudents, onEdit, onDelete }) => {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      {students.map(student => (
        <div key={student.id}>
          {`학번: ${student.id}, 이름: ${student.name}, 나이: ${student.age}, 번호: ${student.phoneNumber}`}
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReadStudents;
