// components/UpdateStudent.js
const updateStudent = async (id, formData, refreshData) => {
  await fetch(`https://6729f62b6d5fa4901b6f276b.mockapi.io/api/v1/students/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  refreshData();
};

export default updateStudent;
