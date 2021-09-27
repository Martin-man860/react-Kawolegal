import React from "react"


function Home() {
    return(

    <div className="hero-image">
        
             <nav className="navbar navbar-light  navedit">
                 <a className="navbar-brand" href="#">
                    <img src="image/KAWO.png" width="200px" height="100px" className="d-inline-block align-top" alt=""/>
                 </a>

                 <ul>
                    <li className="active-nav"><a href="index.html">Home</a></li>
                    <li><a href="../Startup/index.html"> Startups</a></li>
                    <li><a href="../Register/index.html">Register</a></li>
                    <li><a href="../Login/index.html">Login</a></li>
                  </ul>
             </nav>

         <div className="content">
                 <h1 className="text-center">KAWOLEGAL</h1>
                 <p className="text-center">A collaborative ecosystem for problem <br/>solvers and support for startups.</p>
             <div className="buttonsetup">
                 <a href="../Register/index.html"><button>Register Now!</button></a>
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

export default Home;