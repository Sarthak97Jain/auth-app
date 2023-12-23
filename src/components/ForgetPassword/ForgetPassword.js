import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {

    const NavigateTo = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem("username") !== null){
            NavigateTo('/dashboard')
        }
    },[])
  return (
    <div className='check'>ForgetPassword</div>
  )
}

export default ForgetPassword