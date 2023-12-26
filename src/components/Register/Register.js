import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';
import './Register.css'

const Register = () => {

    const NavigateTo = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem("username") !== null){
            NavigateTo('/dashboard')
        }
    },[]);
    
    const fetchData = () => fetch('http://localhost:3000/loginUsers')
    .then(response => response.json())
    .then(data => data)
    .catch(err=>console.log(err));
    
    const handleRegister = async(event) => {
      event.preventDefault();
      const data =  await fetchData();
      if(data.filter((user)=>(user.username === event.target[0]?.value)).length !== 0){
        toast.error("Username Already Exists",{
          position:'top-right'
        });
      }
      else if(event.target[1]?.value === event.target[2]?.value && event.target[0]?.value &&event.target[1]?.value !== '' ){
              const username = event.target[0]?.value
              const password = event.target[1]?.value
              console.log(username, password);
               await fetch("http://localhost:3000/loginUsers",{
                method:'POST',
                body: JSON.stringify({
                  username: username,
                  passward:password
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              });
              sessionStorage.clear();
              sessionStorage.setItem("registerFlag", true);
              NavigateTo('/');
            }else{
              toast.error("Passwords should match",{
                position:'top-right'
              });
            }
    }

  return (
    <>
      <form onSubmit={handleRegister} className='register-form'>
          <div className='register-div'>
            <div className='check'>
              Register User
            </div>
            <div className='register-fields'>
              <span className='check'>Username :</span>
              <input type='text' />
            </div>
            <div className='register-fields'>
              <span className='check'>Password :</span>
              <input type='password' />
            </div>
            <div className='register-fields'>
              <span className='check'>Confirm Password :</span>
              <input type='password' />
            </div>
            <button type='submit' className='create-button'>Register</button>
        </div>
      </form>
      <Toaster/>
    </>
  )
}

export default Register