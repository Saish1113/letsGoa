import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
//import 'date-fns'
//import Grid from '@material-ui/core/Grid'
//import DateFnsUtils from '@date-io/date-fns'
//import {
  //  MuiPickersUtilsProvider,
    //KeyboarddatePicker
//} from '@material-ui/pickers'
const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "200px auto" }
    const headerstyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

  //  const [selectedDate, setSelectedDate] = React.useState(
    //    new Date("2022-06-04T12:00:00")
    //) 

    //const handleDateChange = (date) => {
      //  setSelectedDate(date)
    //}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        
                    </Avatar>
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
                    
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />} label="I accept the terms and conditions" />

                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>
            </Paper>
        </Grid>

    )
}

export default Signup;