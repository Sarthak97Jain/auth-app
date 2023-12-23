import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import toast ,{Toaster} from 'react-hot-toast'

const Login = (props) => {

  const NavigateTo = useNavigate();
    // useEffect(()=>{
    //     const uname = sessionStorage.getItem("username");
    //     if(sessionStorage.getItem("registerFlag")==="true"){
    //       toast.success("Registration Complete! Please Login to continue.",{
    //         position: 'top-right'
    //       })
    //       sessionStorage.setItem("registerFlag",false);
    //     }
    //     if(uname === null || uname===''){
    //         NavigateTo('/');
    //         if(sessionStorage.getItem("showLogoutBanner")==="true"){
    //           toast.error("Logged Out!",{
    //             position: 'top-right'
    //           })
    //           sessionStorage.clear();
    //         }
    //     }
    //     else{
    //       NavigateTo('/dashboard');
    //     }
    // },[])


  const fetchData = () => fetch('http://localhost:3000/loginUsers')
  .then(response => response.json())
  .then(data => data)
  .catch(err=>console.log(err));

  const validateUser =  async(checkUsername ,checkPassward) => {
    const data =  await fetchData()
    const user = data.filter((user)=> user.username === checkUsername);
    console.log(user[0]?.username);
    console.log(user[0]?.passward);
    if(user[0]?.username){
      if(user[0]?.passward === checkPassward){
        console.log("proceed.")
        NavigateTo('/dashboard');
        sessionStorage.setItem("username",checkUsername);
        sessionStorage.setItem("showLoginBanner",true)
        const input1 = document.getElementById('uname');
        const input2 = document.getElementById('pwd');
        input1.value = '';
        input2.value = '';
      }
      else{
        toast.error("Failed! , wrong credentials.",{
          position: 'top-right'
        })
        console.log("Failed! , wrong credentials.")
      }
    }
    else{
      toast.error("Failed! , wrong username.",{
        position: 'top-right'
      })
      console.log("Failed! , wrong username.")
    }
  }

  const handleLogin =  (event) => {
    event.preventDefault();
    console.log(event);
    var username = event?.target[0]?.value;
    var password = event?.target[1]?.value;
     validateUser(username,password)
    console.log(username,password);
  }

  return (
    <>
    <div className="App">
      <div className='parent-container'>
        <div style={{display:'flex', justifyContent:'center'}}>
          <div style={{width:'50%'}}>
            <header>
              <h3 data-testid='login-comp' >Login with your username and password.</h3>
            </header>
          </div>
        </div>
        <div className='login-form'>
          <form onSubmit={handleLogin}>
            <div className='form-field'>
              <div className='label-conatiner'>
                <span className='input-name check'>Username</span>
              </div>
              <input type="text" className='input-field' placeholder="username" id='uname'></input>
            </div>
            <div className='form-field'>
              <div className='label-conatiner'>
                <span className='input-name check'>Password</span>
              </div>
              <input type="password" className='input-field' placeholder='*********' id='pwd'></input>
            </div>
            <div className='form-field'>
              <input data-testid='navigate' type="submit" value='Login' ></input>
            </div>
          </form>
        </div>
        <div className='footer-text'>
            <Link to='/register' className='footer-align register'>Register</Link>
            <Link to='forget' className='footer-align forgot'>forgot password?</Link>
          </div>
        </div>
        {/* <div>
          <button onClick={passUsername}>Pass data</button>
        </div> */}
    </div>
    <Toaster/>
    </>
  )
}

export default Login
