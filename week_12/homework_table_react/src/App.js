import React, { useState } from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import AddUsers from "./components/AddUsers/AddUsers";

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);

  function addUser(newUser) {
    let newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);

    
  }
  console.log(users);
    return (
      <>
        <Header handleShow={handleShow} />
        <AddUsers show={show} handleClose={handleClose} addUser={addUser} />
        <Section users={users} />
        <Footer />
      </>
    );
}


export default App;
