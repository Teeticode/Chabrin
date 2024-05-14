import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import Box from "@/components/Globals/Box";
import { ScreenWidth } from "@rneui/base";
import { moderateScale } from "react-native-size-matters";
import ImageWrapper from "@/components/Globals/ImageWrapper";
import MainButton from "@/components/Globals/MainButton";
import Colors from "@/constants/Colors";
import MainText from "@/components/Globals/MainText";

type Props = {};

const OnboardingHeader = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Box
      align="center"
      width={ScreenWidth}
      justify="space-between"
      direction="row"
      pa={moderateScale(2)}
    >
      <Box>
        <ImageWrapper
          source={require("../../../assets/utils/icon.png")}
          height={moderateScale(60)}
          width={moderateScale(60)}
        />
      </Box>
      <Box>
        <MainButton
          width={moderateScale(120)}
          pa={moderateScale(0)}
          height={moderateScale(40)}
          align="center"
          color="transparent"
          borderColor={Colors.theme.darkGreen}
          borderWidth={2}
          justify="center"
        >
          <MainText
            color={colorScheme === "dark" ? "white" : "black"}
            weight="900"
          >
            skip
          </MainText>
        </MainButton>
      </Box>
    </Box>
  );
};

export default OnboardingHeader;

const styles = StyleSheet.create({});
