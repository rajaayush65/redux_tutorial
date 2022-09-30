import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validateLoginInput } from "../helpers/validateUserInput";
import {
  changeEmail,
  changePassword
} from "../redux/actions/inputChangeActions";
import { login } from "../redux/actions/authActions";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const email = useSelector(state => state.changeValue.email);
  const [errors, setErrors] = useState({});
  const password = useSelector(state => state.changeValue.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeHandler = e => {
    const { name, value } = e.target;
    setErrors({});
    if (name === "email") {
      dispatch(changeEmail(value));
    } else if (name === "password") {
      dispatch(changePassword(value));
    }
  };

  const loginHandler = e => {
    e.preventDefault();
    const { errors, valid } = validateLoginInput(email, password);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
    }
    if (valid) {
      dispatch(login({ type: "LOGIN" }));
      navigate("/home");
    }
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight:"71vh"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={loginHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus
              error={errors.email ? true : false}
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              value={password}
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              autoFocus
              error={errors.password ? true : false}
              onChange={changeHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          {Object.keys(errors).length > 0 && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              {Object.values(errors).map(value => (
                <Alert key={value} severity="error">
                  {value}
                </Alert>
              ))}
            </Stack>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
