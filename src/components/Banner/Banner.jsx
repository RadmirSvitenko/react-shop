import React from "react";
// import PropTypes from "prop-types";
import {
  BannerContainer,
  BannerText,
  ButtonBanner,
  EmailTextField,
} from "./stylesBanner";
import { Box, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerText>STAY UPTO DATE ABOUT OUR LATEST OFFERS</BannerText>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <EmailTextField
          sx={{ py: 1, px: 2 }}
          placeholder="Enter your email address"
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />
        <ButtonBanner
          sx={{
            py: 1,
            px: 2,
            transition: "0.8s",
            ":hover": {
              background: "red",
              color: "#000",
              transition: "0.8s",
            },
          }}
        >
          Subscribe to Newsletter
        </ButtonBanner>
      </Box>
    </BannerContainer>
  );
};

Banner.propTypes = {};

export default Banner;
