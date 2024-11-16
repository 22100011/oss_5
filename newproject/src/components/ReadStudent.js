// components/ReadStudents.js
import React, { useEffect } from 'react';
import './read.css';

const ReadStudents = ({ students, fetchStudents, onEdit, onDelete }) => {
  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <div>
      {students.map(student => (
        <div key={student.id} className='readSt'>
          {`학번: ${student.id}, 이름: ${student.name}, 나이: ${student.age}, 번호: ${student.phoneNumber}`}
          <br/>
          <button onClick={() => onEdit(student)}>Edit</button>
          <button onClick={() => onDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReadStudents;
