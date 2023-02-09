import React from "react";
import Table from "react-bootstrap/Table";

const Section = ({ users }) => {
  console.log(users);
  return (
    <>
      <h3 className="text-center mt-3">Users List</h3>
      <Table
        striped
        bordered
        hover
        className="w-75 mx-auto mb-5"
        style={{ backgroundColor: "#0dcaf0" }}
      >
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Section;
