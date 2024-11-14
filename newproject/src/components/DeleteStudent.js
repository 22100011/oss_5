// components/DeleteStudent.js
const deleteStudent = async (id, refreshData) => {
  await fetch(`https://6729f62b6d5fa4901b6f276b.mockapi.io/api/v1/students/${id}`, {
    method: 'DELETE',
  });
  refreshData();
};

export default deleteStudent;
