import React, { useState, useEffect } from "react";

import { Table } from "react-bootstrap";

export default function UserList() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
      fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
      
          data.json().then(result =>{
           console.log("result",result);
           setUser(result.data)
          })
      })
  },[])
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
          {
              user.map((item, index)=>
                  <tr key ={index}>
                      <td>{item.id}</td>
                      <td>{item.employee_name}</td>
                      <td>{item.employee_age}</td>
                      <td>{item.employee_salary}</td>
                  </tr>
              )
          }
        </thead>
      </Table>
    </div>
  );
}
