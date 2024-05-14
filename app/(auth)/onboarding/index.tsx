import Box from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import OnboardingMainComponent from "@/Screens/auth/OnboardingMainComponent";
import React from "react";
import { moderateScale } from "react-native-size-matters";

type Props = {};

function OnboardingRootView({}: Props) {
  return (
    <Box>
      <OnboardingMainComponent />
    </Box>
  );
}

export default OnboardingRootView;
