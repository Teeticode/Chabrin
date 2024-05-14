import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainText from "@/components/Globals/MainText";
import Box from "@/components/Globals/Box";
import MainOtpScreen from "@/Screens/setup/MainOtpScreen";
import { moderateScale, verticalScale } from "react-native-size-matters";
import MainRootViewTheme from "@/components/Globals/MainRootViewTheme";
import AnimationSkia from "./AnimationSkia";

type Props = {};

const OtpMainView = (props: Props) => {
  return (
    <MainRootViewTheme>
      <AnimationSkia />
    </MainRootViewTheme>
  );
};

export default OtpMainView;

const styles = StyleSheet.create({});
