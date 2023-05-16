import React, { useState } from 'react';
import Navbar from './components/Navbar';
// import { Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
// import Home from '/.views/Home'
import Products from '/.components/Products'
import Seecart from '/.components/Seecart'



export default function App () {

  const [user, setUser] = useState({})

  const logMeIn = (user) => {
    setUser(user)
  };
  const logMeOut = () => {
    setUser({})
  };
  
    return (
        <div>
          <Navbar user={user} logMeOut={logMeOut}/>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/Login' element={<Login logMeIn={logMeIn} user={user}/>} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Products' element={<Products />}/>
            <Route path='/Seecart' element={<Seecart />}/>
          </Routes>
        </div>
    )
  
};
