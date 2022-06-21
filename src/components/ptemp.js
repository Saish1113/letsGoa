import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
import {
    toast,
    ToastContainer
  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

//import Travel from './Travel';
//import profile from "./images/personal3.gif";
//import{Link,useNavigate} from 'react-router-dom';

import  { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
 

function App() {

    useEffect(() => {
        
        Axios.get("http://localhost:3001/login").then((response) => {
          if (response.data.loggedIn == true) {
            //setSessionUser(response.data.user[0]);
            console.log(response.data.user[0]);
            var name=response.data.user[0].fullname;
            var email=response.data.user[0].email;
          }
        });
      }, []);


    const history = useHistory();

    const [name, setName]=useState('');
    const [Address, setAddress]=useState('');
    const [Age, setAge]=useState('');
    const [Dob, setDob]=useState('');
    const [Adhar, setAdhar]=useState('');
    const [Email, setEmail]=useState('');
    const [errmsg,setAErrmsg]=useState('');

    const handleSubmition=(e)=>{
        e.preventDefault();
      
        if(!name || !Address || !Age || !Dob || !Adhar || !Email ){
          alert("Please Fill all the fields");
        }
        else if(Age<0 || Age==0){
            alert("Invalid age entered")
        }
        else if(Adhar.length!=12){
            alert("Enter proper Adhar number")
        }
        else{
        history.push("/Flight");
        }

    }
    /*
    const handleClick=(e)=>{
        console.log("Refresh prevented");
        history.push('/Flight')
    }*/



            /// Example starter JavaScript for disabling form submissions if there are invalid fields/
            /*(function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                //var name2 = document.getElementById('fullname').value; 
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    }
                    else{
                        history.push('/Flight')
                    }
                    form.classList.add('was-validated');
                }, false);
                });
            }, false);
            }
            )();*/

  return (

    
    
    <div className="UserDetails1">
      <div id="d4">
      <button id="PersonalDetail"><h3> PERSONAL DETAILS</h3></button>
        <button id="TravelDetails"><h3>TRAVEL DETAILS</h3></button>
        <button id="AccDetail"><h3>ACCOMODATION DETAILS</h3></button>
        <button id="ActivityDetails"><h3>ACTIVITY DETAILS</h3></button>
        


      </div>
      <br></br><br></br>

    
      <div class="container" >
          <div class="row">
                <div class="col-lg">
                     <form class="needs-validation" noValidate>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Name</i></h3></label>
                            <input type="text" class="form-control" id="fullname" aria-describedby="enter full name" placeholder="Enter Full Name" onChange={e=>setName(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid name.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Address</i></h3></label>
                            <input type="text" class="form-control" id="address" aria-describedby="Enter valid email" placeholder="Enter Address" onChange={e=>setAddress(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid address.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Age</i></h3></label>
                            <input type="number" class="form-control" id="age" aria-describedby="emailHelp" placeholder="Enter Age" min="1" onChange={e=>setAge(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>DOB</i></h3></label>
                            <input type="date" class="form-control" id="dob" aria-describedby="emailHelp" placeholder="Enter email" format="yy-mm-dd" maxDate="22-06-18" onChange={e=>setDob(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Adhar Card No.</i></h3></label>
                            <input type="tel" class="form-control"pattern="[0-9]{12}" id="aadhar" aria-describedby="emailHelp" placeholder="Enter Adhar Card no" onChange={e=>setAdhar(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                    
                     
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Email address</i></h3></label>
                            <input type="email" class="form-control" id="email_id" aria-describedby="emailHelp" placeholder="Enter email"onChange={e=>setEmail(e.target.value)} required />
                            <small id="email_tip" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <label><i><h3>Gender</h3></i></label>
                        <div class="custom-control custom-radio">
                            
                            <input type="radio" id="gender" name="customRadio" class="custom-control-input" required/>
                            <label class="custom-control-label" for="customRadio1"><h4>Male</h4></label>
                           
                            <input type="radio" id="gender" name="customRadio" class="custom-control-input" required/>
                            <label class="custom-control-label" for="customRadio2"><h4>Female</h4></label>
                        </div>
                        
                       <br></br><br></br>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" onClick={handleSubmition} class="btn btn-primary" > Next</button>
                        
                    </form> 

                    </div>         

          
                   
      
            <div class="col-lg">
            <img src={'../images/personal3.gif'} alt="profile" className="profile"/>
            </div>
        </div>

        
      

    </div>
    <h3>{errmsg}</h3>
    </div>
   


   

    

);
}

export default App;