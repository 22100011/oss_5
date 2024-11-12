// services/StudentService.js
const API_URL = 'https://6729f62b6d5fa4901b6f276b.mockapi.io/api/v1/students';

// 학생 목록 가져오기 (READ)
export async function getStudents() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch students:", error);
    return [];
  }
}

// 새로운 학생 추가하기 (CREATE)
export async function createStudent(student) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to create student:", error);
    return null;
  }
}

// 학생 정보 수정하기 (UPDATE)
export async function updateStudent(id, updatedInfo) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInfo),
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to update student:", error);
    return null;
  }
}

// 학생 삭제하기 (DELETE)
export async function deleteStudent(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    return true;
  } catch (error) {
    console.error("Failed to delete student:", error);
    return false;
  }
}
