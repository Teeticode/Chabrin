import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import Box from "@/components/Globals/Box";
import { ScreenHeight, ScreenWidth, color } from "@rneui/base";
import SignUpMainContainer from "@/Screens/auth/SignUpMainContainer";

type Props = {};

const SignUpMainContainerRootView = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Box
      height={ScreenHeight}
      color={colorScheme === "dark" ? "#000000" : "#ffffff"}
      width={ScreenWidth}
    >
      <SignUpMainContainer />
    </Box>
  );
};

export default SignUpMainContainerRootView;

const styles = StyleSheet.create({});
