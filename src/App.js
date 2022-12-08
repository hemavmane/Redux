import React from 'react';
import { useSelector } from 'react-redux';
// import {Home} from './Auth/AuthComponent/Home'
// import { LogOut } from './Auth/AuthComponent/LogOut';
import { Counters } from './Practice/CounterData/Counter';
// import './App.css';
// import { LoginForm } from './Auth/AuthComponent/LoginForm';

function App() {
  // <>
  // const useformData = useSelector((state)=>{
  //   console.log(state)
  //          return   state.userloggin
  // })
  return (
    <>
    {/* { */}
  {/* //     !useformData ? <><Home/><LoginForm/></>:<LogOut/> */}
  {/* //   } */}
      
<Counters/>
    </>
  );
}

export default App;
