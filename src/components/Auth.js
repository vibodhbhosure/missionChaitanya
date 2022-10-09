import React, { useState } from "react";
import dayjs from 'dayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Typography from "@mui/material/Typography";
import '../Auth.css'
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MuiTelInput } from 'mui-tel-input';

export default function Auth() {
    const [isSignup, setIsSignup] = useState(false)
    console.log(isSignup)
    const [value, setValue] = React.useState(null);
    const [phone, setPhone] = React.useState('')

    const handleChangeInPhone = (newPhone) => {
      setPhone(newPhone)
    }

    return (

        <div id="bgauth" marginTop={0}>
            <form id="form">
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent="center"
                    margin="auto"
                    backgroundColor="#FFFFFF"

                    padding={3}
                    borderRadius={5}
                    boxShadow={"2px 2px 2px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "5px 5px 5px #ccc",
                        }
                    }}
                >
                    <Typography variant="h4" padding={2} textAlign="center">{isSignup?"Sign Up":"Login"}</Typography>
                    {isSignup && <TextField margin="normal" type={"text"} varient="outlined" label="Enter Name"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    />}
                    <TextField margin="normal" type={"email"} varient="outlined" label="Email"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    />
                    {isSignup && <TextField margin="normal" type={"password"} varient="outlined" label=" Create Password"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    />}
                    {isSignup && <TextField margin="normal" type={"password"} varient="outlined" label=" Re-enter Password"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    />}
               {!isSignup &&     <TextField margin="normal" type={"password"} varient="outlined" label="Password"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                    />}
                    {isSignup && <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DesktopDatePicker
                            label="Date of Birth"
                            inputFormat="MM/DD/YYYY"
                            value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
                            renderInput={(params) => <TextField {...params} sx={{
                            width: 500,
                            maxWidth: '100%',
                        }} margin="normal" />}
                        /> </LocalizationProvider>}
 {isSignup && <MuiTelInput value={phone} onChange={handleChangeInPhone}  sx={{
                            width: 500,
                            maxWidth: '100%',
                            marginTop:1,
                        }}/>}

                    <Button variant="contained" color="success" sx={{
                        marginTop: 3, borderRadius: 3, width: 100

                    }} >{isSignup?"Sign Up":"Login"}</Button>
                    {!isSignup && <Typography marginTop={2}>New to Mission Chaitanya?<Button onClick={() => setIsSignup(!isSignup)} >Sign Up</Button></Typography>}
                </Box>
            </form>
        </div>
    );
};


