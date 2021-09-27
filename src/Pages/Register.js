import React from "react";


function Register() {
    return(
        <div>

    

<div className="bodybg">

        
<div className="navedit">
    <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="../Home/index.html">
        <img src="image/KAWO.png" width="200px" height="85px" className="d-inline-block align-top" alt=""/>
        
        </a>

        <ul>
            <li><a href="../Home/index.html">Home</a></li>
            <li><a href="../Startup/index.html">Startup</a></li>
            <li><a href="../Register/index.html">Register</a></li>
            <li className="active-nav"><a href="index.html">Login</a></li>
        </ul>
    </nav>
</div>

<div className="container">
    <div className="row">
        <div className="col-md-10 offset-md-1">
            <h3 className="text">Already a Member? Login to add your Startup.</h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1"><b>Email address</b></label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                  </div>
                <div className="form-group">
                    <label for="exampleInputPassword1"><b>Password</b></label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
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