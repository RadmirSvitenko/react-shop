import styled from "@emotion/styled";
import bgAuth from "../../images/bg-auth.jpg";
import { Grid, Paper } from "@mui/material";

export const MainContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${bgAuth})`,
  backgroundSize: "100% 150vh",
}));

export const LoginContainer = styled(Grid)(() => ({
  backgroundColor: "primary",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "400px",
  height: "500px",
  margin: "0px 50px",
}));

export const SubContainer = styled(Paper)(() => ({
  width: "100%",
  display: "flex",
  backdropFilter: "blur(10px)",
  boxShadow: "-10px 10px 11px 3px rgba(34, 60, 80, 0.5)",
  backgroundColor: "transparent",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  lineHeight: "100px",
  padding: "30px",
  borderRadius: "20px",
}));
