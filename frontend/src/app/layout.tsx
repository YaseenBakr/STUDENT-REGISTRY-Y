import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "1rem", background: "#f0f0f0" }}>
          <h1>Student Registry</h1>
          <nav>
            <a href="/form" style={{ marginRight: 10 }}>Add Student</a>
            <a href="/get-student" style={{ marginRight: 10 }}>View Students</a>
            <a href="/update-student" style={{ marginRight: 10 }}>Update Student</a>
            <a href="/delete-student">Delete Student</a>
          </nav>
        </header>
        <main style={{ padding: "2rem" }}>{children}</main>
      </body>
    </html>
  );
}