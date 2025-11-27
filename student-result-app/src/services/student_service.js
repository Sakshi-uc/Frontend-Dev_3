const API_URL = 'http://localhost:3000/students';

export const getStudents = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Error loading students. Make sure JSON Server is running.');
    console.error('Error:', error);
    return null;
  }
};

export const addStudent = async (studentData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Error adding student.');
    console.error('Error:', error);
    return null;
  }
};

export const updateStudent = async (id, studentData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(studentData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    alert('Error updating student.');
    console.error('Error:', error);
    return null;
  }
};

export const deleteStudent = async (id) => {
  try {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return true;
  } catch (error) {
    alert('Error deleting student.');
    console.error('Error:', error);
    return false;
  }
};