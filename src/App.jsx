import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
// import Home from '/.views/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Getproduct from './components/Getproduct'

export default function App () {

  const [user, setUser,] = useState({})
  const [cart, setCart] = useState([]);


  const logMeIn = (user) => {
    setUser({user: user})
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
            <Route path='/Cart' element={<Cart />}/>
            <Route path='/Getproduct' element={<Getproduct/>}/>
          </Routes>
        </div>
    )
  
};
