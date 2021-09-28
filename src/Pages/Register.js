import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


function Register() {
    
        
        const [name, setName] = useState("")
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (name && email && password && confirmPassword) {
            if (password == confirmPassword) {
              setName("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
            } else {
              alert("Password does not match");
              setPassword("");
              setConfirmPassword("");
            }
          } else {
            alert("Fill forms to continue");
          }
        };


        return (
          <div>
            <div className="bodybg">
              <div className="navedit">
                <nav className="navbar navbar-light bg-light">
                  <Link className="navbar-brand" to="/">
                    <img
                      src="image/KAWO.png"
                      width="200px"
                      height="85px"
                      className="d-inline-block align-top"
                      alt="logo"
                    />
                  </Link>
      
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/startups">All Startup</Link>
                    </li>
                    <li className="active-link">
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </nav>
              </div>
      
              <div className="container">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <h3 className="text">
                      Join KawoLegal. Sign up to get your startup listed now!
                    </h3>
      
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group">
                        <label htmlFor="exampleInputfullname1">
                          <b>Full Name</b>
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="exampleInputfullname1"
                          aria-describedby="nameHelp"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          <b>Email address</b>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">
                          <b>Password</b>
                        </label>
                        <input
                          name="password"
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputconfirmPassword1">
                          <b>Confirm Password</b>
                        </label>
                        <input
                          name="confirmPassword"
                          type="password"
                          className="form-control"
                          id="exampleInputconfirmPassword1"
                          placeholder="Confirm password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
      
            <footer className="homefooter">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <h6>&copy; 2021 KawoLegal.All Right reserved</h6>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <div className="logo">
                      <a href="#" className="fa fa-facebook"></a>
                      <a href="#" className="fa fa-twitter"></a>
                      <a href="#" className="fa fa-linkedin"></a>
                      <a href="#" className="fa fa-instagram"></a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>    
        
    )
}

export default Register;