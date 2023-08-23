import { Box, Grid, Typography } from "@mui/material";
import {
  ContainerDressStyleOne,
  ContainerDressStyleTwo,
  DressStyleImageOne,
  DressStyleImageTwo,
  DressStyleImageThree,
  DressStyleImageFour,
  MainContainerDressStyle,
  TitleDressStyle,
  DressTypographyDescription,
} from "./variantStyleStyles";

const VariantStyle = () => {
  return (
    <MainContainerDressStyle>
      <Box
        sx={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleDressStyle>BROWSE BY dress STYLE</TitleDressStyle>
      </Box>
      <ContainerDressStyleOne>
        <DressStyleImageOne>
          <DressTypographyDescription>Casual</DressTypographyDescription>
        </DressStyleImageOne>
        <DressStyleImageTwo>
          <DressTypographyDescription>Formal</DressTypographyDescription>
        </DressStyleImageTwo>
      </ContainerDressStyleOne>

      <ContainerDressStyleTwo>
        <DressStyleImageThree>
          <DressTypographyDescription>Party</DressTypographyDescription>
        </DressStyleImageThree>
        <DressStyleImageFour>
          <DressTypographyDescription>Gym</DressTypographyDescription>
        </DressStyleImageFour>
      </ContainerDressStyleTwo>
    </MainContainerDressStyle>
  );
};

export default VariantStyle;
