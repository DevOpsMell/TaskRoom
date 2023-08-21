import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formValues.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    } else {
      newErrors.email = "";
    }

    if (!formValues.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

  if (isValid) {
    console.log("Form submitted");
    // console.log("Form values:", formValues);
  } 
  // else {
  //   console.log("Form validation failed");
  // }
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
      bgcolor="#ffffff"
    >
      <Container
        maxWidth="sm"
        sx={{
          borderRadius: "3px",
          padding: "25px 40px",
          boxShadow: "rgba(0,0,0,0.1) 0 0 10px",
        }}
      >
        <form onSubmit={handleOnSubmit}>
          <h2 style={{ textAlign: "center", fontSize: "45px" }}>Login</h2>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleOnChange}
            name="email"
            type="text"
            error={Boolean(errors.email)}
            helperText={errors.email}
          />

          <TextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleOnChange}
            name="password"
            type="password"
            error={Boolean(errors.password)}
            helperText={errors.password}
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
              to="/register"
              variant="outlined"
              size="small"
              style={{ marginLeft: "10px" }}
            >
              Register
            </Button>
          </p>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
