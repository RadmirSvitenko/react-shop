import React, { useState } from "react";
import { LoginRounded, Visibility, VisibilityOff } from "@mui/icons-material";

import {
  Grid,
  Paper,
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import {
  RegistrationContainer,
  MainContainer,
  SubContainer,
} from "./registrationStyle";

const Registration = () => {
  return (
    <MainContainer>
      <RegistrationContainer>
        <SubContainer>
          <Typography
            sx={{
              margin: "40px 0px",
              color: "#512da8",
              letterSpacing: "2px",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            REGISTRATION
          </Typography>

          <Box>
            <TextField
              variant="standard"
              label="Your login"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <LoginRounded />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              variant="standard"
              label="Your password"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box>
            <TextField
              variant="standard"
              label="Repead password"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <form>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#512da8",
                color: "secondary",
                padding: "7px 40px",
              }}
            >
              CREATE ACCOUNT
            </Button>
          </form>

          <Button variant="outlined" href="login">
            AUTHORIZATION
          </Button>
        </SubContainer>
      </RegistrationContainer>
    </MainContainer>
  );
};

export default Registration;
