import React from 'react'
import { Button, Grid, Paper, TextField, Typography } from '@mui/material'

    

const Manageaccount = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "200px auto" }
    const headerstyle = { margin: 0 }
  

   
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                  
                    <h2 style={headerstyle}>MANAGE ACCOUNT</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to manage form !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='UserName' placeholder='Enter Your Username' />
                    <TextField fullWidth label='Change UserName' placeholder='Change Your username Here' />

                    <TextField fullWidth label='Password' placeholder='Enter Your Password' />
                    <TextField fullWidth label='Change Password'placeholder='Change Your Password Here'/>

                    <TextField fullWidth label='Email' placeholder='Enter Your Email' />
                    <TextField fullWidth label='Change Email' placeholder='Change Your Email Here' />
        

                    <TextField fullWidth label='Phone Number' placeholder='Enter your contact no' />
                
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
                </form>
            </Paper>
        </Grid>

    )
}

export default Manageaccount;