import axios from 'axios';
import React, { useState } from 'react'

const addvolunteer = () => {
    const [volunteer, setvolunteer] = useState({
        volunteerid: "",
   fullname: "",
   email: "",
   phone: "",
   dateofbirth: "",
   gender: "",
   bloodgroup: "",
   department: "",
   yearofstudy: "",
   campname: "",
   hourscompleted: "",
   address: "",
   unitnumber: ""
    });
    const inputHandler = (e) => {
        setvolunteer({ ...volunteer, [e.target.name]: e.target.value });
    }
    const readValues=()=>{
        axios.post("http://localhost:3000/addvolunteer",volunteer).then((res)=>
        {
            alert("Added Successfully");
        }).catch(()=>{
            alert("Error")
        })
    }
  return (
    <div>
      <h3>addvolunteer</h3>
      <input className="form-control mb-2" name="volunteerid" placeholder="Team ID" onChange={inputHandler} />
      <input className="form-control mb-2" name="fullname" placeholder="Team Name" onChange={inputHandler} />
      <input className="form-control mb-2" name="email" placeholder="Leader Name" onChange={inputHandler} />
      <input className="form-control mb-2" name="phone" placeholder="Leader Email" onChange={inputHandler} />
      <input className="form-control mb-2" name="dateofbirth" placeholder="Leader Phone" onChange={inputHandler} />
      <input className="form-control mb-2" name="gender" placeholder="College Name" onChange={inputHandler} />
      <input className="form-control mb-2" name="bloodgroup" placeholder="Members" onChange={inputHandler} />
      <input className="form-control mb-2" name="department" placeholder="Project Title" onChange={inputHandler} />
      <input className="form-control mb-2" name="yearofstudy" placeholder="Problem Track" onChange={inputHandler} />
      <input className="form-control mb-2" name="campname" placeholder="Technology Stack" onChange={inputHandler} />
      <input className="form-control mb-2" name="hourscompleted" placeholder="Mentor Name" onChange={inputHandler} />
      <input className="form-control mb-2" name="address" type="date" onChange={inputHandler} />
      <input className="form-control mb-2" name="unitnumber" placeholder="Table Number" onChange={inputHandler} />
      <button className="btn btn-primary" onClick={readValues}>Add Volunteer</button>
    </div>
  )
};


export default addvolunteer