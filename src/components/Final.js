import React, { useEffect, useState } from "react";
import './Sign.css';
//import profile from "../../public/images/log.jpg";
import Axios from 'axios'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


const SignUp = () => {

    const [usernameReg,setUserNameReg] = useState('');
    const [passwordReg,setpasswordReg] = useState('');
    const [emailReg,setemailReg] = useState('');
    const [AddressReg,setAddressReg] = useState('');
    const[DOBReg,setDOBReg] =useState('');

    const [loginStatus, setLoginStatus] = useState("");
    
    const [date,setDate]=useState();
    
    //console.log("Date" , date);
    const paperStyle = { padding: '30px 20px', width: 300, margin: "200px auto" }
    const headerstyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }


    const register = () => {
      Axios.post("http://localhost:3001/register", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response.data);
        setLoginStatus({message: "sign up successfull"});
        console.log(loginStatus);
      });
    };

  
    useEffect(() => {
      Axios.get("http://localhost:3001/login").then((response) => {
        if (response.data.loggedIn == true) {
          setLoginStatus(response.data.user[0].username);
        }
      });
    }, []);

    return (
      <>
        <div className="main">
         <div className="sub-main">
           <div>
             <div className="imgs">
               <div className="container-image">
                 <img src="../images/log.jpg" alt="profile" className="profile"/>
    
               </div>
    
    
             </div>
             <div>
               <h1>SignUp Page</h1>
               <div>
                 <input type="text" 
                 placeholder="Enter Name" 
                 className="name" 
                 onChange={(e) => {
                    setUserNameReg(e.target.value);
                  }}
                />
               </div>

               <div className="second-input">
                
                 <input type="Email" 
                 placeholder="Enter Email" 
                 className="name"
                 onChange={(e) => {
                  setemailReg(e.target.value);
                }} 
              />
               </div>

               <div className="third-input">
                
                 <input type="password" 
                 placeholder="password" 
                 className="name" 
                 onChange={(e) => {
                 setpasswordReg(e.target.value);
                }}
              />
               </div>

               <div className="fourth-input">
                
                 <input type="password" 
                 placeholder="confirm password" 
                 className="name"
                 />
               </div>

               <div className="five-input">
                 <label>DOB</label>
                <input type="date"  
                 placeholder="DOB" 
                 className="name" 
                 onChange={(e) => {
                  setDOBReg(e.target.value);
                }}
              />
              </div>

               <div className="six-input">
                
                <input type="Address" 
                placeholder="Enter address" 
                className="name"
                onChange={(e) => {
                  setAddressReg(e.target.value);
                }} 
                />
              </div>

              <div className="login-button">
              <button onClick={register}>Sign Up</button>
               </div>
               
                <p className="forgot-password">
                    Already registered <a href="/sign-up">sign in?</a>
                 </p>
             </div>
           </div>
         </div>
        </div>
        </>
  )
};

export default SignUp;