import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 在 RegisterPage 组件内定义 handleOnSubmit 函数
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      
      <form onSubmit={handleOnSubmit} style={{ width: "45%" }}>
      <h2 style={{ textAlign: "center", fontSize:"45px" }}>Register</h2>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleOnChange}
          name="name"
          type="text"
        />

        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleOnChange}
          name="email"
          type="text"
        />

        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleOnChange}
          name="password"
          type="password"
        />

        <Button 
        variant="contained" 
        color="primary" 
        type="submit" 
        fullWidth 
        style={{ margin: "25px auto" }}>
          Register
        </Button>
        <p style={{ textAlign: "center" }}>
        <span>Already a member?</span>
        <Button component={Link} to="/login" variant="outlined" size="small" style={{ marginLeft: "10px" }}>
          Login
        </Button>
      </p>
      </form>
      
    </Box>
  );
};

export default RegisterPage;
