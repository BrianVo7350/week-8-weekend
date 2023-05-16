import React from 'react';
// import { Link } from 'react-router-dom';

export default function Login({LogMeIn}) {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;


        const url = 'http://127.0.0.1:5000/api/Login';
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+":"+password)}`
            }
        };

        const res = await fetch(url, options);
        const data = await res.json();
        if (data.status === 'ok'){
            const myUserInfo = data.data
            LogMeIn(myUserInfo)
        }

    }

    return (
        <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    )
  }

