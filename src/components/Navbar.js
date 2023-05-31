import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    {
                            this.props.user.apitoken? //if logged in 
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                                        </li>
                                        <li className="nav-item">
                                            <p className="nav-link" >Hello, {this.props.user.username}</p>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/products">Products</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/cart">Current Cart</Link>
                                        </li>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/signup">Sign Up</Link>
                                        </li>
                                    </>
                                )
                    }


                </ul>
            </div>
        </div>
    </nav>
    )
  }
}
