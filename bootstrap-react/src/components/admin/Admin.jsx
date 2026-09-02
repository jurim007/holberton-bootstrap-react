import React, { useState, useEffect } from "react";
import "./admin.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase());
  });

  return (
    <Container className="py-4">
      <h2>Users</h2>
      <Form.Control
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <ListGroup>
        {filteredUsers.map((user) => (
          <ListGroup.Item key={user.id}>
            {user.firstName} {user.lastName} — {user.email}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Admin;