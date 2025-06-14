"use client";
import React, { useEffect, useState } from "react";

export default function GetStudentsPage() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/student")
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map((student, idx) => (
            <li key={student.id || idx}>
              {student.firstName} {student.lastName} | {student.email} | {student.age} | {student.course} | {student.gender}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
