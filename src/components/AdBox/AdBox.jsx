import React from "react";
import {
  AdInfoContainer,
  GridInfo,
  AdImageContainer,
  ShowNowBtn,
  CountInfoBox,
  GridInfoText,
  MainAdGrid,
} from "./adBoxStyles";
import { Box, Grid, Typography } from "@mui/material";
import starImg from "../../images/star.svg";
import { Image } from "@mui/icons-material";

const AdBox = () => {
  return (
    <MainAdGrid>
      <AdInfoContainer>
        <Grid>
          <GridInfo>
            <GridInfoText>FIND CLOTHES THAT MATCHES YOUR STYLE</GridInfoText>

            <Typography
              sx={{
                color: "#00000099",
                fontSize: "13.5px",
              }}
            >
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Typography>

            <ShowNowBtn variant="contained">Shop Now</ShowNowBtn>

            <CountInfoBox>
              <Box>
                <Typography fontSize={"40px"} fontWeight={"bold"}>
                  200+
                </Typography>
                <Typography
                  sx={{
                    color: "#00000099",
                    fontSize: "13.5px",
                  }}
                >
                  International Brands
                </Typography>
              </Box>

              <Box>
                <Typography fontSize={"40px"} fontWeight={"bold"}>
                  2,000+
                </Typography>
                <Typography
                  sx={{
                    color: "#00000099",
                    fontSize: "13.5px",
                  }}
                >
                  High-Quality Products
                </Typography>
              </Box>

              <Box>
                <Typography fontSize={"40px"} fontWeight={"bold"}>
                  30,000+
                </Typography>
                <Typography
                  sx={{
                    color: "#00000099",
                    fontSize: "13.5px",
                  }}
                >
                  Happy Customers
                </Typography>
              </Box>
            </CountInfoBox>
          </GridInfo>
        </Grid>
      </AdInfoContainer>

      <AdImageContainer>
        <img
          style={{
            position: "absolute",
            top: "50%",
            width: "56px",
            height: "56px",
          }}
          src={starImg}
          alt="star"
        />
        <img
          style={{
            position: "absolute",
            top: "25%",
            right: "5%",
            width: "104px",
            height: "104px",
          }}
          src={starImg}
          alt="star"
        />
      </AdImageContainer>
    </MainAdGrid>
  );
};

export default AdBox;
