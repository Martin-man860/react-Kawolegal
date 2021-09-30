import React from "react";
import { Link } from "react-router-dom";


function Startup() {
    return (
        <div>
        <div className="body-bg">
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
                <li className="active-link">
                  <Link to="/startup">All Startup</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
  
          <div className="container searchbar">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <form action="#">
                  <input
                    type="search"
                    name="search"
                    id="search-input"
                    placeholder="Search Startup by name or industry"
                    style={{ paddingLeft: 20 + "px" }}
                  />
                  <button href="#" id="search-btn">
                    <i className="fa fa-search"></i> &nbsp; Search
                  </button>
                </form>
              </div>
            </div>
          
          <div className="container">
            <div className="row cards">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="image/think.jpg"
                      alt=""
                      className="img-fluid card-image"
                      style={{ maxWidth: 130 + "px" }}
                    />
                  </div>
                  <div className="col-md-8 line">
                    <h3>
                      <a href="">Think and Zoom</a>
                  </h3>
                    <p className="one">
                      Providing solutions for the visually impaired, such as
                      mind-controlled zooming, and wearable controlled zooming.
                    </p>
                    <button className="card-button">See full details</button>
                  </div>
                </div>
              </div>
            </div>

 
            <div className="row cards">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-md-4 ">
                    <img
                      src="image/cube.png"
                      alt=""
                      className="img-fluid card-image"
                      style={{ maxWidth: 130 + "px" }}
                    />
                  </div>
                  <div className="col-md-8 line">
                    <h3>
                      <a href="">Slatecube</a>
                    </h3>
                    <p className="one">
                      Slatecube helps job seekers develop job-relevant skills,
                      gain work experience, and land well paying jobs through
                      world-className up-skilling courses and virtual internships
                    </p>
                    <button className="card-button">See full details</button>
                  </div>
                </div>
              </div>
            </div>



            <div className="row cards">
              <div className="col-md-10 offset-md-1">
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src="image/Ajumah.png"
                      alt=""
                      className="img-fluid card-image"
                      style={{ maxWidth: 130 + "px" }}
                    />
                  </div>
                  <div className="col-md-8 line line-off">
                    <h3>
                      <a href="">Sleekjob Academy</a>
                    </h3>
                    <p className="one">
                      Trains world className software developers in Ghana and
                      matches them to employment opportunities
                    </p>
                    <button className="card-button">See full details</button>
                  </div>
                </div>
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
</div>        
    )
}
export default Startup;