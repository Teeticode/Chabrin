import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Box from "@/components/Globals/Box";
import { moderateScale, verticalScale } from "react-native-size-matters";
import MainText from "@/components/Globals/MainText";
import { MYfonts } from "@/components/Typography/Fonts";

type Props = {
  title: string;
  shortHeadline: string;
  Description: string;
};

const TypographyOnboarding = ({ title, shortHeadline, Description }: Props) => {
  return (
    <Box pa={moderateScale(15)} mt={verticalScale(20)}>
      <Box width={"90%"}>
        <MainText size={moderateScale(30)}>
          {title}{" "}
          <MainText color={"#204D6C"} size={moderateScale(30)}>
            {shortHeadline}
          </MainText>
        </MainText>
      </Box>
      <Box mt={verticalScale(20)}>
        <MainText
          fontFamily={MYfonts.Nunito_400Regular_Italic}
          size={moderateScale(15)}
        >
          {Description}
        </MainText>
      </Box>
    </Box>
  );
};

export default TypographyOnboarding;

const styles = StyleSheet.create({});
