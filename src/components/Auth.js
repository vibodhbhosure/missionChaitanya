import React, { useState } from "react";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Typography from "@mui/material/Typography";
import "../Auth.css";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MuiTelInput } from "mui-tel-input";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  console.log(isSignup);
  const [value, setValue] = React.useState(null);
  const [phone, setPhone] = React.useState("");

  const handleChangeInPhone = (newPhone) => {
    setPhone(newPhone);
  };

  return (
    <div className="full-page">
      <div id="login-form" className="login-page">
        <div className="form-box">
          <div className="button-box">
            <div id="btn"></div>
            <button type="button" onclick="login()" className="toggle-btn">
              Log In
            </button>
            <button type="button" onclick="register()" className="toggle-btn">
              Register
            </button>
          </div>
          <form id="login" className="input-group-login">
            <input
              type="text"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>Remember Password</span>
            <button type="submit" className="submit-btn">
              Log in
            </button>
          </form>
          <form id="register" className="input-group-register">
            <input
              type="text"
              className="input-field"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Last Name "
              required
            />
            <input
              type="email"
              className="input-field"
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
            />
            <input
              type="password"
              className="input-field"
              placeholder="Confirm Password"
              required
            />
            <input type="checkbox" className="check-box" />
            <span>I agree to the terms and conditions</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
