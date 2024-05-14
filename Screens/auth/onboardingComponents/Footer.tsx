import { StyleSheet, Text, useColorScheme } from "react-native";
import React from "react";
import Box, { AnimatedBox } from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Colors from "@/constants/Colors";
import { View } from "@/components/Themed";
import MainButton from "@/components/Globals/MainButton";
import { ScreenWidth } from "@rneui/base";
import MainIcon from "@/components/Globals/MainIcon";
import { MYfonts } from "@/components/Typography/Fonts";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
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

type Props = {
  handleNext: () => void;
  onBack: () => void;
  currentIndex: number;
};

const Footer = ({ handleNext, onBack, currentIndex }: Props) => {
  const colorScheme = useColorScheme();
  return (
    <Box
      align="center"
      position="absolute"
      bottom={-verticalScale(0)}
      width={"100%"}
      justify="center"
    >
      <View
        style={[
          {
            alignItems: "center",
            justifyContent: "center",
          },
        ]}
      >
        <Box
          color={"white"}
          width={moderateScale(100)}
          height={verticalScale(5)}
          radius={moderateScale(60)}
          zIndex={200}
          opacity={0.6}
        >
          <AnimatedBox
            width={
              currentIndex === 0
                ? "10%"
                : currentIndex === 1
                ? "50%"
                : currentIndex === 2
                ? "100%"
                : "auto"
            }
            style={{}}
            position="absolute"
            zIndex={400}
            opacity={1}
            radius={moderateScale(50)}
            height={"100%"}
            color={Colors.theme.darkGreen}
            align="flex-end"
          ></AnimatedBox>
        </Box>
      </View>
      <Box
        align="center"
        justify="space-between"
        direction="row"
        width={"100%"}
        pa={moderateScale(10)}
        mt={verticalScale(10)}
      >
        {currentIndex === 0 ? (
          <Box>
            <MainText
              fontFamily={MYfonts.Nunito_500Medium}
              size={moderateScale(13)}
            >
              Welcome to Chabrin
            </MainText>
          </Box>
        ) : (
          <Animated.View key={currentIndex} entering={FadeInLeft}>
            <MainButton
              color={Colors.theme.darkGreen}
              pa={moderateScale(10)}
              width={moderateScale(60)}
              height={moderateScale(60)}
              onPress={() => onBack()}
              radius={moderateScale(30)}
            >
              {/* <MainText color={colorScheme === "dark" ? "black" : "white"}>
            Next
          </MainText> */}
              <MainIcon
                source="Ionicons"
                color="white"
                size={moderateScale(20)}
                name="arrow-back"
              />
            </MainButton>
          </Animated.View>
        )}
        <Animated.View key={`${currentIndex}eir`} entering={FadeInRight}>
          <MainButton
            color={Colors.theme.darkGreen}
            pa={moderateScale(10)}
            width={moderateScale(60)}
            height={moderateScale(60)}
            radius={moderateScale(30)}
            onPress={() => handleNext()}
          >
            {currentIndex === onboarding?.length + 1 ? (
              <MainIcon
                source="Ionicons"
                color="white"
                size={moderateScale(20)}
                name="home"
              />
            ) : (
              <MainIcon
                source="Ionicons"
                color="white"
                size={moderateScale(20)}
                name="arrow-forward"
              />
            )}
            {/* <MainText color={colorScheme === "dark" ? "black" : "white"}>
            Next
          </MainText> */}
          </MainButton>
        </Animated.View>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = StyleSheet.create({});
