import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddUsers = ({ show, handleClose, addUser }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  function createUser() {
    if (!name || !lastName || !age) {
      alert("Some inputs are empty!");
      return;
    }

    let newUser = {
      name,
      lastName,
      age,
      id: Date.now(),
    };

    addUser(newUser);

    setName("");
    setLastName("");
    setAge("");

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <FormControl
              size="lg"
              className="my-3"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createUser}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUsers;
