import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert'
import SignUp from '../images/log.svg';
import SignInImg from '../images/register.svg';
import { Link } from 'react-router-dom';

const SignIn = (props) => {
    let [credentials, setCredentials] = useState({
        "username": "",
        "password": ""
    })

    const changeHandler = (e) => {
        var { name, value } = e.target;
        setCredentials(
            {
                ...credentials, [name]: value
            }
        )

    }

    const loginUser = (e) => {
        e.preventDefault();

        axios.post("http://localhost:90/account/login", credentials)
            .then((response) => {
                if (response.data.success == true) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    swal({
                        "title": "Success",
                        "text": response.data.message,
                        "icon": "success"
                    })
                    window.location.href = "/"
                }
                else {
                    swal({
                        "title": "Error",
                        "text": response.data.message,
                        "icon": "error"
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <React.Fragment>
            <>
                <Container>
                    <div className="sn">
                        <div className="container pgT pgTT">
                            <div className="form-box">
                                <div className="header-form">
                                    <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
                                    <div className="image"></div>
                                </div>
                                <div className="body-form">
                                    <form method="submit" onSubmit={loginUser}>
                                        <div className="input-group mb-3 ">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                                            </div>
                                            <div className="form-group">

                                                <input type="text" className="form-control" name="username" value={credentials.accUN} onChange={(event) => { changeHandler(event) }} placeholder="Enter username" />
                                            </div>
                                        </div>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i class="fa fa-lock"></i></span>
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control" name="password" value={credentials.accPwd} onChange={(event) => { changeHandler(event) }} placeholder="Enter password" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-secondary btn-block">LOGIN</button>
                                        <p className="nts">New to this site?</p>
                                        <Link to="/register" ><button type="button" className="btn btn-secondary btn-block">Register</button></Link>
                                        <div className="message">
                                            <div><input type="checkbox" /> Remember ME</div>
                                            <div><a href="#">Forgot your password</a></div>
                                        </div>
                                    </form>
                                    <div className="social">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                                        <a href="#"><i className="fab fa-google"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </>
        </React.Fragment >
    );
}

export default SignIn

