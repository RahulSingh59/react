import React,{useState} from 'react'
import { Button } from 'react-bootstrap';

export default  function CreateUser() {

    const [name, setName] =useState("");

    const [age, setAge] =useState("");

    const [address, setAddress] =useState("");

    function makeUser() {
        let data = {name,age,address}
        console.log("Called",data);
        
    }
    return (
        <div>
            <center>
            <h1>Make a new User</h1>
            <input onChange={(e)=>setName(e.target.value)} type="text"  name="Username" value={name}/><br/><br/>
            <input onChange={(e)=>setAge(e.target.value)} type="text" name="age" value={age}/><br/> <br/>
            <input onChange={(e)=>setAddress(e.target.value)} type="text" name="address" value={address}/> <br/> <br/>
            <Button variant="primary" onClick={makeUser}>Create User</Button>{' '}
            </center> 
        </div>
    )
}

