import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { BrowserRouter , Routes , Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/Register/Register';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login/>}></Route>    
        <Route path='/dashboard' element={ <Dashboard/>}></Route> 
        <Route path='/register' element={ <Register/>}></Route> 
        <Route path='/forget' element={ <ForgetPassword/>}></Route> 
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
