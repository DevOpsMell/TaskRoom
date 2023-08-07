import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

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
      <h2 style={{ textAlign: "center", fontSize:"45px" }}>Login</h2>
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
          style={{ margin: "25px auto" }}
        >
          Login
        </Button>

        <p style={{ textAlign: "center" }}>
          <span>Not a member?</span>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            size="small"
            style={{ marginLeft: "10px" }}
          >
            Register
          </Button>
        </p>
      </form>
    </Box>
  );
};

export default LoginPage;
