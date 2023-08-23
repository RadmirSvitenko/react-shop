import { Grid } from "@mui/material";
import React from "react";
import { BrandInfoBox } from "./brandInfoStyles";
import versaceImg from "../../images/versace.svg";
import zaraImg from "../../images/zara-logo-1 1.svg";
import gucciImg from "../../images/gucci-logo-1 1.svg";
import pradaImg from "../../images/prada-logo-1 1.svg";
import kelvinKleinImg from "../../images/kelvin-klein.svg";

const BrandInfo = () => {
  return (
    <Grid>
      <BrandInfoBox>
        <img src={versaceImg} alt="versace" />
        <img src={zaraImg} alt="zara" />
        <img src={gucciImg} alt="gucci" />
        <img src={pradaImg} alt="prada" />
        <img src={kelvinKleinImg} alt="kelvin" />
      </BrandInfoBox>
    </Grid>
  );
};

export default BrandInfo;
