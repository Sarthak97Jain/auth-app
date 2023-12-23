import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const NavigateTo = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem("username") !== null){
            NavigateTo('/dashboard')
        }
    },[])

  return (
    <div className='check'>Register</div>
  )
}

export default Register