import React from "react";
import {
  FooterAboutContainer,
  FooterAboutLink,
  FooterAboutLinkContainer,
  FooterAboutLinkFitstBox,
  FooterAboutLinkTitle,
  FooterVisaBox,
  FooterMainContainer,
  FooterDown,
} from "./footerStyles";
import { Box, Typography } from "@mui/material";
import { HeaderLogotype } from "../Header/headerStyles";
import Social from "../../images/social.png";
import Visa from "../../images/visa.png";
import Payments from "../../images/payments.png";
import PayPal from "../../images/pay-pal.png";
import Pay from "../../images/pay.png";
import GooglePay from "../../images/google-pay.png";

const Footer = () => {
  return (
    <FooterMainContainer>
      <FooterAboutContainer>
        <FooterAboutLinkContainer>
          <FooterAboutLinkFitstBox>
            <HeaderLogotype
              sx={{
                marginBottom: "10px",
              }}
            >
              SHOP.CO
            </HeaderLogotype>

            <Typography
              sx={{
                color: "#00000099",
                alignItems: "flex-start",
                lineHeight: "30px",
              }}
            >
              We have clothes that suits your style and <br /> which you re
              proud to wear. From <br /> women to men.
            </Typography>
            <Box>
              <img src={Social} alt="social" />
            </Box>
          </FooterAboutLinkFitstBox>
        </FooterAboutLinkContainer>

        <FooterAboutLinkContainer>
          <FooterAboutLinkTitle>Company</FooterAboutLinkTitle>

          <FooterAboutLink href={"#"}>Customer Support</FooterAboutLink>
          <FooterAboutLink href={"#"}>Delivery Details </FooterAboutLink>
          <FooterAboutLink href={"#"}>Terms & Conditions</FooterAboutLink>
          <FooterAboutLink href={"#"}>Privacy Policy</FooterAboutLink>
        </FooterAboutLinkContainer>
        <FooterAboutLinkContainer>
          <FooterAboutLinkTitle>Help</FooterAboutLinkTitle>

          <FooterAboutLink href={"#"}>Account</FooterAboutLink>
          <FooterAboutLink href={"#"}>Manage Deliveries </FooterAboutLink>
          <FooterAboutLink href={"#"}>Orders</FooterAboutLink>
          <FooterAboutLink href={"#"}>Payments</FooterAboutLink>
        </FooterAboutLinkContainer>
        <FooterAboutLinkContainer>
          <FooterAboutLinkTitle>FAQ</FooterAboutLinkTitle>

          <FooterAboutLink href={"#"}>Free eBooks</FooterAboutLink>
          <FooterAboutLink href={"#"}>Development Tutorial </FooterAboutLink>
          <FooterAboutLink href={"#"}>Works</FooterAboutLink>
          <FooterAboutLink href={"#"}>Career</FooterAboutLink>
        </FooterAboutLinkContainer>
        <FooterAboutLinkContainer>
          <FooterAboutLinkTitle>Resources</FooterAboutLinkTitle>

          <FooterAboutLink href={"#"}>About</FooterAboutLink>
          <FooterAboutLink href={"#"}>Features </FooterAboutLink>
          <FooterAboutLink href={"#"}>How to - Blog</FooterAboutLink>
          <FooterAboutLink href={"#"}>Youtube Playlist</FooterAboutLink>
        </FooterAboutLinkContainer>
      </FooterAboutContainer>
      <Box
        sx={{
          width: "1240px",
          height: "1px",
          background: "rgba(0, 0, 0, 0.10)",
        }}
      ></Box>
      <FooterDown>
        <Box>
          <FooterAboutLink>
            Shop.co © 2000-2023, All Rights Reserved
          </FooterAboutLink>
        </Box>

        <FooterVisaBox>
          <img src={Visa} alt="Visa" />
          <img src={Payments} alt="Peyments" />
          <img src={Pay} alt="Pay" />
          <img src={PayPal} alt="Visa" />
          <img src={GooglePay} alt="GooglePay" />
        </FooterVisaBox>
      </FooterDown>
    </FooterMainContainer>
  );
};

export default Footer;
