import React from 'react';
// import { Link } from 'react-router-dom';

export default function SignUp() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
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
                username: username,
                email: email,
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

    return (
      <div>
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassword' />
                </div>
        <button type="submit" class="btn btn-primary">Create Account</button>
      </form>
      </div>

    )
  }

