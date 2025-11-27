import React from 'react';

function StudentDetails({ student, onBack }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Details</h2>

        <div className="space-y-4">
          <div className="border-b pb-3">
            <p className="text-sm text-gray-600 mb-1">Name</p>
            <p className="text-lg font-semibold text-gray-800">{student.name}</p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm text-gray-600 mb-1">Section</p>
            <p className="text-lg font-semibold text-gray-800">{student.section}</p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm text-gray-600 mb-1">Marks</p>
            <p className="text-lg font-semibold text-gray-800">{student.marks}</p>
          </div>

          <div className="border-b pb-3">
            <p className="text-sm text-gray-600 mb-1">Grade</p>
            <span className={`inline-block px-3 py-1 rounded text-lg font-semibold ${
              student.grade === 'A' ? 'bg-green-100 text-green-800' :
              student.grade === 'B' ? 'bg-blue-100 text-blue-800' :
              student.grade === 'C' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {student.grade}
            </span>
          </div>
        </div>

        <button
          onClick={onBack}
          className="w-full mt-6 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 font-semibold"
        >
          Back to List
        </button>
      </div>
    </div>
  );
}

export default StudentDetails;