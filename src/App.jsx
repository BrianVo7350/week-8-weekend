import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Login from './views/Login'
import Signup from './views/Signup'
// import Home from '/.views/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import Singleproduct from './components/Singleproduct'

const getuserfromlocalstorage = () => {
  const found = localStorage.getItem("Brian user")
  if (found) {
    return JSON.parse(found)
  }
    return {}
};

export default function App () {

  const [user, setUser,] = useState(getuserfromlocalstorage)
  // const [cart, setCart] = useState([]);


  const logMeIn = (user) => {
    setUser(user)
    localStorage.setItem("Brian user", JSON.stringify(user))
  };
  const logMeOut = () => {
    setUser({})
    localStorage.removeItem("Brian user")
  };

  //Functional comps instead of class
    return (
        <div>
          <Navbar user={user}logMeOut={logMeOut}/>
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/Login' element={<Login logMeIn={logMeIn}/>} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/Products' element={<Products />}/>
            <Route path='/Cart' element={<Cart />}/>
            <Route path='/Singleproduct' element={<Singleproduct/>}/>
          </Routes>
        </div>
    )
  
};
