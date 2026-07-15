import React, { useEffect, useState } from 'react'

const viewvolunteer = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        axios.post('http://localhost:3000/viewvolunteer').then((res)=>
        {
            setData(res.data);
        });
    },[]);
  return (
    <div>
      <div>viewvolunteer</div>
      <table className="">
          <thead className="">
              <tr className="">
                  <th className="">volunteerid</th>
                  <th className="">fullname</th>
                  <th className="">email</th>
                  <th className="">phone</th>
                  <th className="">dateofbirth</th>
                  <th className="">gender</th>
                  <th className="">bloodgroup</th>
                  <th className="">department</th>
                  <th className="">Year Of Study</th>
                  <th className="">Camp Name</th>
                  <th className="">Hours Completed</th>
                  <th className="">Address</th>
                  <th className="">Unit Number</th>
              </tr>
          </thead>
          <tbody>
            {data.map((value,index)=>
            (
                <tr key={index}>
                    <td className="">{value.volunteerid}</td>
                    <td className="">{value.fullname}</td>
                    <td className="">{value.phone}</td>
                    <td className="">{value.dateofbirth}</td>
                    <td className="">{value.gender}</td>
                    <td className="">{value.bloodgroup}</td>
                    <td className="">{value.department}</td>
                    <td className="">{value.yearofstudy}</td>
                    <td className="">{value.campname}</td>
                    <td className="">{value.hourscompleted}</td>
                    <td className="">{value.address}</td>
                    <td className="">{value.unitnumber}</td>
                </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default viewvolunteer