import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import Box from "@/components/Globals/Box";
import SigninMainComponent from "@/Screens/auth/SigninMainComponent";
import { ScreenHeight } from "@rneui/base";
import MainRootViewTheme from "@/components/Globals/MainRootViewTheme";

type Props = {};

const SignInRootView = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <MainRootViewTheme>
      <SigninMainComponent />
    </MainRootViewTheme>
  );
};

export default SignInRootView;

const styles = StyleSheet.create({});
