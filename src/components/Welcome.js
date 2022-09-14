import React from 'react'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Welcome = () => {
    const navigate = useNavigate();
 const logout = ()=> {
    toast.success("Logout");
    navigate("/");
    }
  return (
    <div className='bg'>
      Welcome Text
      <div className='btn'>
        <button onClick={logout}>
         Logout
        </button>
      </div>
    </div>
  )
}

export default Welcome
