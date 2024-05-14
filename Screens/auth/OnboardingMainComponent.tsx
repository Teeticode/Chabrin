import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MainText from "@/components/Globals/MainText";
import Box from "@/components/Globals/Box";
import { moderateScale, verticalScale } from "react-native-size-matters";
import ImageWrapper from "@/components/Globals/ImageWrapper";
import MainButton from "@/components/Globals/MainButton";
import { ScreenWidth, color } from "@rneui/base";
import Colors from "@/constants/Colors";
import OnboardingHeader from "./onboardingComponents/OnboardingHeader";
import TypographyOnboarding from "./onboardingComponents/TypographyOnboarding";
import LottieView from "lottie-react-native";
import Footer from "./onboardingComponents/Footer";
import { router } from "expo-router";
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { FadeInDown, runOnJS } from "react-native-reanimated";
import Animated, {
  BounceInRight,
  BounceOutLeft,
  FadeIn,
  FadeOut,
} from "react-native-reanimated";

type Props = {};

const onboarding = [
  {
    id: "1",
    title: "Find best place to stay in",
    shortHeadline: "good price",
    Description: "We give you the best place to live near you",
  },
  {
    id: "1",
    title: "Fast sell your property in just",
    shortHeadline: "one click",
    Description: "want to sell, then this is your market",
  },
  {
    id: "1",
    title: "Find perfect choice for your",
    shortHeadline: "future house",
    Description: "We make your dream house become a reality",
  },
];

const OnboardingMainComponent = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex === onboarding.length - 1) {
      router.push("/(auth)/signin/");
    } else if (currentIndex < onboarding.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = currentIndex === 0;
    if (isFirstScreen) {
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const fling = Gesture.Fling()
    .direction(Directions.LEFT)

    .onEnd((event) => {
      runOnJS(handleNext)();
    });
  const swipeBack = Gesture.Fling()
    .direction(Directions.RIGHT)

    .onEnd((event) => {
      runOnJS(onBack)();
    });
  const swipes = Gesture.Simultaneous(swipeBack, fling);
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={swipes}>
        <Box ma={moderateScale(20)}>
          <Box height={"80%"}>
            <OnboardingHeader />
            <Animated.View key={currentIndex} entering={FadeInDown}>
              <TypographyOnboarding
                title={onboarding[currentIndex].title}
                shortHeadline={onboarding[currentIndex].shortHeadline}
                Description={onboarding[currentIndex].Description}
              />
            </Animated.View>
            <Box align="center" justify="center" height={verticalScale(300)}>
              <LottieView
                style={{
                  width: "100%",
                  height: "100%",
                }}
                source={require("../../assets/animations/location.json")}
                autoPlay
                loop
              />
            </Box>
          </Box>
          <Box height={"20%"}>
            <Footer
              currentIndex={currentIndex}
              handleNext={handleNext}
              onBack={onBack}
            />
          </Box>
        </Box>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default OnboardingMainComponent;

const styles = StyleSheet.create({});
