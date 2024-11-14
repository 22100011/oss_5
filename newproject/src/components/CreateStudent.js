// components/CreateStudent.js
const createStudent = async (formData, refreshData) => {
  await fetch('https://6729f62b6d5fa4901b6f276b.mockapi.io/api/v1/students', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  refreshData();
};

export default createStudent;
