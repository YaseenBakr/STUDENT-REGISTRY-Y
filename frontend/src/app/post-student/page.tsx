"use client";
import React, { useState } from "react";

export default function PostStudentPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    course: "",
    gender: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Register Student</h1>
      {submitted ? (
        <p>Student registered!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input name="age" value={form.age} onChange={handleChange} placeholder="Age" type="number" required />
          <input name="course" value={form.course} onChange={handleChange} placeholder="Course" required />
          <select name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
