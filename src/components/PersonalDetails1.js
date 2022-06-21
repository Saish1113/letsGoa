import logo from './logo.svg';
import './personalDetails.css';
import  React, {Component} from 'react'
import {TextField} from "@material-ui/core"
import {Button} from 'react-bootstrap';
//import Travel from './Travel';
import profile from "./images/personal3.gif";
import{Link,useNavigate} from 'react-router-dom';
import  { useState,useEffect } from 'react';
//import DatePicker from 'react-DatePicker';
//import 'react-datepicker/dist/react-datepicker.css'


import Axios from "axios";
//import { SubdirectoryArrowLeftTwoTone } from '@mui/icons-material';






 

function App() {


    const [startDate,setStartDate]=useState(null);
    const [loginStatus, setLoginStatus] = useState("");
    const [name, setName]=useState('');
    const [Address, setAddress]=useState('');
    const [Age, setAge]=useState('');
    const [Dob, setDob]=useState('');
    const [Adhar, setAdhar]=useState('');
    const [Email, setEmail]=useState('');
    const [Gender, setGender]=useState('');
    const [serrmsg,setAErrmsg]=useState('');
	const navigate=useNavigate();



    const handleSubmition=(e)=>{
        e.preventDefault();
      
        if(!name || !Address || !Age || !Dob || !Adhar || !Email || !Gender ){

            alert("please fill all the field");
        }
        else if(Age<0|| Age==0){
            alert("Invaid age entered");
        }

        else if(Adhar.length!=12)
        {
            alert("enter proper adhar card no ");
        }

        else if(Dob>"2022-06-18")
        {
            alert("enter proper Date of Birth");
        }

         else{
            setAErrmsg("");

            register();
            navigate('/Flight');
            

         } 
          
        }
       
        
    const register = () => {
        Axios.post("http://localhost:3001/personaldetails", {
            name: name,
            address: Address,
            age:Age,
            email:Email,
            aadhar: Adhar,
            dob: Dob,
            gender:Gender,
        
         
          //password: passwordReg,
        }).then((response) => {
          console.log(response.data);
          setLoginStatus({message: "Personal Details is successfull"});
          console.log(loginStatus);
        });
      };

    



            /*// Example starter JavaScript for disabling form submissions if there are invalid fields
            (function() {
            'use strict';
            window.addEventListener('load', function() {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
                });
            }, false);
            })();*/

  return (

    
    
    <div className="UserDetails1">
      <i><b><h1> Goa Tour</h1></b></i>
      <div id="d0">
        
       
      
        <button id="home"><b>HOME</b></button>{'  '}
        <button id="gallery"><b>GALLERY</b></button>{'  '}
        <button id="about us"><b>ABOUT US</b></button>{'  '}
        <button id="signin"><b>SIGNIN</b></button>{'  '}
        

      </div>
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
                     <form class="needs-validation" novalidate>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Name</i></h3></label>
                            <input type="text" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="Enter Full Name" onChange={e=>setName(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Address</i></h3></label>
                            <input type="text" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="Enter Address" onChange={e=>setAddress(e.target.value)}required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Age</i></h3></label>
                            <input type="number" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="Enter Age" onChange={e=>setAge(e.target.value)} required/>
                            <div class="invalid-feedback">
                                 Please provide a valid zip.
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>DOB</i></h3></label>
                            <input type="date" class="form-control" id="exampleInputtext" aria-describedby="emailHelp" placeholder="Enter email" onChange={e=>setDob(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                     
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Adhar Card No.</i></h3></label>
                            <input type="number" class="form-control" id="Adhar" aria-describedby="emailHelp" placeholder="Enter Adhar Card no" onChange={e=>setAdhar(e.target.value)} required/>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>


                    
                     
                        <div class="form-group">
                            <label for="exampleInputEmail1"><h3><i>Email address</i></h3></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={e=>setEmail(e.target.value)} required />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            <div class="invalid-feedback">
                                Please provide a valid zip.
                            </div>
                        </div>

                        <label><i><h3>Gender</h3></i></label>
                        <div class="custom-control custom-radio">
                            
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" value="Male" onChange={e=>setGender(e.target.value)}/>
                            <label class="custom-control-label" for="customRadio1"><h4>Male</h4></label>
                           
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"  value="FeMale" onChange={e=>setGender(e.target.value)}/>
                            <label class="custom-control-label" for="customRadio2"><h4>Female</h4></label>
                        </div>
                        
                       <br></br><br></br>
                       <h6>{serrmsg}</h6>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" class="btn btn-primary" onClick={handleSubmition}> Next</button>
                        
                    </form> 

                    </div>         

          
                   
      
            <div class="col-lg">
            <img src={profile} alt="profile" className="profile"/>
            </div>
        </div>

        
      

    </div>
    </div>
   


   

    

);
}

export default App;