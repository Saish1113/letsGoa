import React, { useEffect, useState } from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './Reg.css';
import Axios from 'axios'

const validationSchema = Yup.object().shape({
  password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string()
        .matches(
          /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
          "Not a Phone number"
        )
        .required("Required"),
      message: Yup.string()
        .min(5, "Too Short!")
        .max(11, "Too Long!")
        .required("Required"),
    });

const Reg = () => {

   // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
// form validation rules 


const formOptions = { mode: "onChange",resolver: yupResolver(validationSchema) };

// get functions to build form with useForm() hook
const { register, handleSubmit, reset, formState ,setValue} = useForm(formOptions);
const { errors } = formState;




const onSubmitHandler = (data) => {
  alert(JSON.stringify(data));
  reset();
};



    return (
        <>
            <Container className="mt-5" id="reg">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={'../images/renu.png'} alt="icon"/>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                        <h2>SignUp</h2>
                            <Form.Group controlId="Name">
                                <Form.Control type="Name" 
                                placeholder="Enter FullName" 
                                required  
                              />
                            </Form.Group><br></br>

                            <Form.Group controlId="Email">
                                <Form.Control type="Email" 
                                placeholder="Enter Email" 
                                required 
                              
                                 />
                                <div className="invalid-feedback">{errors.email?.message}</div>

                            </Form.Group><br></br>

                            <Form.Group controlId="dob">
                                <Form.Control type="date" 
                                placeholder="Enter Date of birth" 
                                
                                required/>

                                
                            </Form.Group><br></br>

                            <Form.Group controlId="gender">
                                <Form.Select placeholder="Select Gender" >
                                    <option>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </Form.Select>

                            </Form.Group><br></br>

                            <Form.Group controlId="Phone">
                                <label htmlFor="phone">Enter only 10 digit number</label>
                                <Form.Control type="Phone" placeholder="Enter PhoneNo" required
                                />
                                <div className="invalid-feedback">{errors.phone?.message}</div>
                            </Form.Group><br></br>



                            <Form.Group controlId="Password">
                                <Form.Control type="password" placeholder="Enter Password" required
                                 {...register('password')} 
                                 className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                 onChange={(e) => setValue('password', e.target.value, { shouldValidate: true })}/> 
                                <div className="invalid-feedback">{errors.password?.message}</div>
                            </Form.Group><br></br>

                            <Form.Group controlId="ConfirmPassword">
                                <Form.Control type="Confirmpassword" placeholder="Confirm Password" 
                                required {...register('confirmPassword')} className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.confirmPassword && "password should match"}</div>
                            </Form.Group><br></br>



                            <Button variant="primary btn-block" type="Submit">Login</Button><br></br>
                            <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>

                           <p className="forgot-password">
                                Already registered <a href="/sign-in">sign in?</a>
                           </p>
                        </form>
                    </Col>
                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" height="650px" src={'../images/sign-up.jpeg'} alt=""/>
                    </Col>
                    
                </Row>
            </Container>
        </>
    );
};

export default Reg;