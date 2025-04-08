import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('http://localhost:9000/users');
        console.log(res);
        setUsers(res.data);
    }

  return (
    <div>
      {
        users.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.age}</p>
          </div>
        ))
      }
    </div>
  )
}

export default View