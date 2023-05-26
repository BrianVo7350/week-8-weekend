import React from 'react';
// import { Link } from 'react-router-dom';

export default function Login({LogMeIn}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const first_name = e.target.fist_name.value;
        const password = e.target.password.value;


        const url = 'http://127.0.0.1:5000/api/Login';
        const options = {
            method: "POST",
            headers: {
              // 'Content-Type': 'application/json'
                Authorization: `Basic ${btoa(first_name+":"+password)}`
            },
            body: JSON.stringify({
              first_name : first_name,
              password: password
          })
           
        };

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok'){
            const myUserInfo = data.data
            LogMeIn(myUserInfo)
        }

    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your username with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    )
  }

