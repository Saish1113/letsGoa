import React,{useState} from 'react';
import {  Button, Grid, Paper, TextField, Typography } from '@mui/material'
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
//import profile from "./signup.png";

const Newsign = () => {

    const [usernameReg,setusernameReg] = useState('');
    const [passwordReg,setpasswordReg] = useState('');
    const [emailReg,setemailReg] = useState('');
    const [AddressReg,setAddressReg] = useState('');
    const[DateReg,setDateReg] =useState('');
    

    const paperStyle = { padding: '30px 20px', width: 300, margin: "200px auto" }
    const headerstyle = { margin: 0 }
   // const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    const [date,setDate]=useState();
    console.log("Date" , date);

   
    return (
        <Grid id="g1">
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                <div className="container-image">
                 <img src="../images/log.jpg"alt="profile" className="profile" width="70%" height="50%"/>
    
               </div>
                    <h2 style={headerstyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an acccount !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter Your Name' />
                    <TextField fullWidth label='Email' placeholder='Enter Your Email' />

                    <FormControl component="fieldset" style={marginTop}>

                        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth label='Phone Number' placeholder='Enter your contact no' />
                    <TextField fullWidth label='Password' placeholder='Enter Your Password' />
                    <TextField fullWidth label='Confirm Password'placeholder='Please Confirm Your password here'/>
                    <TextField fullWidth label='Address' placeholder='Enter Your Address'/>
                    
                    <TextField fullWidth label= "Date-of-birth" 
                 onChange={e=>setDate(e.target.value)}/>
              
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />} label="I accept the terms and conditions" />

                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>

    )
}

export default Newsign;