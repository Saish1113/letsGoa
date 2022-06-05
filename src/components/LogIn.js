import './login.css';
//import profile from "../images/renu.png";
function LoginUi() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src='../images/renu.png' alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button id='bubble'>Login</button>
          </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="/SignUp2">Sign Up</a>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}

export default LoginUi;