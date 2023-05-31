import React from 'react';
// import { Link } from 'react-router-dom';

export default function Login({logMeIn}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        const url = 'http://127.0.0.1:5000/api/Login';
        const options = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Basic ${btoa(email+":"+password)}`
            },
            body: JSON.stringify({
              email : email,
              password: password
          })
        };
        const res = await fetch(url, options);
        const data = await res.json();
        console.log(res)
        console.log(data)
        if (data.status === 'ok'){
          console.log(data)
            const myUserInfo = data.data
            logMeIn(myUserInfo)
        }
      }
    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }

