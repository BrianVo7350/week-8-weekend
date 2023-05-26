import React from 'react';
// import { Link } from 'react-router-dom';

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;


        const url = 'http://127.0.0.1:5000/api/Signup';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: email,
                first_name: first_name,
                last_name : last_name,
                password: password
            })
        };

        if (password !== confirmPassword){
            return 
        }

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok'){
        }

    }
//Change backend login/signup information change username
    return (
      <div>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" name = "email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputusername1" className="form-label">First Name</label>
          <input type="text" name = "first_name" className="form-control" id="exampleInputusername1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputusername1" className="form-label">Last Name</label>
          <input type="text" name = "last_name" className="form-control" id="exampleInputusername1"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name = "password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name = "confirmPassword" className="form-control" />
                </div>
        <button type="submit" className="btn btn-primary">Create Account</button>
      </form>
      </div>

    )
  }

