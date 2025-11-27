import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import { getStudents, addStudent, updateStudent, deleteStudent } from './services/studentService';

function App() {
  const [students, setStudents] = useState([]);
  const [currentView, setCurrentView] = useState('list');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [mode, setMode] = useState('add');

  const loadStudents = async () => {
    const data = await getStudents();
    if (data) {
      setStudents(data);
      alert('Students loaded successfully!');
    }
  };

  const handleAddStudent = async (studentData) => {
    const newStudent = await addStudent(studentData);
    if (newStudent) {
      setStudents([...students, newStudent]);
      setCurrentView('list');
      alert('Student added! Click Load Students to refresh.');
    }
  };

  const handleUpdateStudent = async (studentData) => {
    const updatedStudent = await updateStudent(studentData.id, studentData);
    if (updatedStudent) {
      setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
      setCurrentView('list');
      alert('Student updated! Click Load Students to refresh.');
    }
  };

  const handleDeleteStudent = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      const success = await deleteStudent(id);
      if (success) {
        setStudents(students.filter(s => s.id !== id));
        alert('Student deleted!');
      }
    }
  };

  const handleAdd = () => {
    setMode('add');
    setSelectedStudent(null);
    setCurrentView('form');
  };

  const handleEdit = (student) => {
    setMode('edit');
    setSelectedStudent(student);
    setCurrentView('form');
  };

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
    setCurrentView('details');
  };

  const handleCancel = () => {
    setCurrentView('list');
    setSelectedStudent(null);
  };

  const handleFormSubmit = (formData) => {
    if (mode === 'add') {
      handleAddStudent(formData);
    } else {
      handleUpdateStudent({ ...formData, id: selectedStudent.id });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {currentView === 'list' && (
        <StudentList
          students={students}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDeleteStudent}
          onViewDetails={handleViewDetails}
          onLoadStudents={loadStudents}
        />
      )}

      {currentView === 'form' && (
        <StudentForm
          student={selectedStudent}
          onSubmit={handleFormSubmit}
          onCancel={handleCancel}
          mode={mode}
        />
      )}

      {currentView === 'details' && (
        <StudentDetails
          student={selectedStudent}
          onBack={handleCancel}
        />
      )}
    </div>
  );
}

export default App;