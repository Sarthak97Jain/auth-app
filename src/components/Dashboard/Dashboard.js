import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import toast ,{Toaster} from 'react-hot-toast'

const Dashboard = () => {

    useEffect(()=>{
        if(sessionStorage.getItem("showLoginBanner") === "true"){
            toast.success("Successfully Logged In!",{
                position:'top-right'
            });
            sessionStorage.setItem("showLoginBanner",false)
        }
    },[])

    const NavigateTo = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();
        NavigateTo('/')
    }

  return (
    <>
    <div className='check'>Dashboard</div>
    <div>
        <button onClick={handleLogout}>
            Logout
        </button>
    </div>
    <Toaster/>
    </>
  )
}

export default Dashboard