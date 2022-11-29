import React, { useState } from "react";
import { HomeStyles } from "./style";
import { Grid, TextField, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context";
import authService from "../../services/auth.service";
const HomeComponent = () => {
  const { getUserDetails, getUserDetailsSuccess, getUserDetailsFail } =
    UserContext();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    getUserDetails();
    authService
      .login({ username, password })
      .then((user) => {
        getUserDetailsSuccess(user);
        navigate("/todos");
      })
      .catch((err) => getUserDetailsFail());
  };

  return (
    <HomeStyles>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid item xs={12}>
            <TextField
              label="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth onClick={handleLogin}>
              {" "}
              Login{" "}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </HomeStyles>
  );
};

export default HomeComponent;
