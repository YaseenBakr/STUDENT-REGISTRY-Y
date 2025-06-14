"use client";
import React, { useState } from "react";

export default function DeleteStudentPage() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`/api/student/${id}`, {
      method: "DELETE",
    });
    setMessage("Student deleted!");
  };

  return (
    <div>
      <h1>Delete Student</h1>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Student ID"
          value={id}
          onChange={e => setId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}