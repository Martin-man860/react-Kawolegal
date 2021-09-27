import React from "react";


function Startup() {
    return (
        <div>

        


<div className="bodybg">

<div className="navedit">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="../home/index.html">
        <img src="image/KAWO.png" width="200px" height="85px" className="d-inline-block align-top" alt=""/>
        
        </a>

        <ul>
            <li><a href="../Home/index.html">Home</a></li>
            <li><a href="index.html">All Startups</a></li>
            <li><a href="../Register/index.html">Register</a></li>
            <li><a href="../Login/index.html">Login</a></li>
        </ul>
    </nav>
</div>


<div className="container searchbar">
    <div className="row">
        <div class="col-md-10 offset-md-1">
            <form action="#">
                <input type="search" name="search" id="search-input" placeholder="Search Startup by name or industry" style="padding-left: 20px;"/> 
                <button href="#" id="search-btn"><i className="fa fa-search"></i> &nbsp; Search</button>
            </form>
        </div>
    </div>
</div>


<div className="container">
    <div className="row cards">
        <div className="col-md-10 offset-md-1">
           <div className="row">
                <div className="col-md-4">
                    <img src="image/think.jpg" alt="" className="img-fluid card-image" style="max-width: 130px;"/>
                </div>
                <div className="col-md-8 line">
                    <h3><a href="">Think and Zoom</a></h3>
                    <p>
                       Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.
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
                    <img src="image/cube.png" alt="" className="img-fluid card-image" style="max-width: 130px;"/>
                </div>
                <div className="col-md-8 line">
                    <h3><a href="">Slatecube</a></h3>
                    <p>
                       Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-class up-skilling courses and virtual internships
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
                    <img src="image/Ajumah.png" alt="" className="img-fluid card-image" style="max-width: 130px;"/>
                </div>
                <div className="col-md-8 line line-off">
                    <h3><a href="">Sleekjob Academy</a></h3>
                    <p>
                       Trains world class software developers in Ghana and matches them to employment opportunities 
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
         <h6>&copy; 2017 KawoLegal.All Right reserved</h6>
       </div>
       <div className="col-md-4"></div>
       <div className="col-md-4">
            <div class="logo">
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
export default Startup;