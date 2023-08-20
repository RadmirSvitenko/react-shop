import { LoginRounded, VpnKeyRounded } from "@mui/icons-material";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LoginContainer, MainContainer, SubContainer } from "./loginStyle";

const Login = () => {
  return (
    <MainContainer>
      <LoginContainer elevation={20}>
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
            AUTHORIZATION
          </Typography>

          <Box>
            <TextField
              variant="standard"
              label="Login"
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
              label="Password"
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <VpnKeyRounded />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Checkbox defaultChecked />
            <Button>Remember password</Button>
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
              Sign In
            </Button>
          </form>
          <Button variant="outlined" href="/registration">
            REGISTATION
          </Button>
        </SubContainer>
      </LoginContainer>
    </MainContainer>
  );
};

export default Login;
