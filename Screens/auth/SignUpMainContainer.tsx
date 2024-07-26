import {
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from "react-native";

import React, { Ref, RefObject, useEffect, useRef, useState } from "react";
import Box from "@/components/Globals/Box";
import { moderateScale, verticalScale } from "react-native-size-matters";
import Toast from "@/components/Globals/Toast";
import FastImage from "react-native-fast-image";
import { ScreenWidth } from "@rneui/base";
import MainTextInput from "@/components/Globals/MainTextInput";
import MainButton from "@/components/Globals/MainButton";
import MainIcon from "@/components/Globals/MainIcon";
import EstateInput from "@/components/Globals/EstateInput";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AnimatePresence, MotiView } from "moti";
import Animated, {
  runOnJS,
  SlideInDown,
  SlideInLeft,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Colors from "@/constants/Colors";
import LottieView from "lottie-react-native";
import MainText from "@/components/Globals/MainText";
import { MYfonts } from "@/components/Typography/Fonts";
import { FlashMessage } from "@/components/Globals/FlashMessage";
import { Divider } from "@rneui/themed";
import ImageIcon from "@/components/Globals/ImageIcon";
import { router } from "expo-router";

type Props = {};

const SignUpMainContainer = (props: Props) => {
  const [trigger, setTrigger] = useState(false);
  const [focused, setFocused] = useState(false);
  const [focused2, setFocused2] = useState(false);
  const [next, setNext] = useState(false);
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState("");
  const textInputRef = useRef<TextInput>(null);
  const textInputRef2 = useRef<TextInput>(null);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [noAction, setNoAction] = useState(true);
  const scale = useSharedValue(1);
  const scrollViewRef = useRef(null);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  useEffect(() => {
    let runme = 0;
    if (focused) {
      const loopAnimation = () => {
        runme++;
        scale.value = withSpring(
          1.1,
          { damping: 5, stiffness: 100, mass: 1 },
          () => {
            scale.value = withSpring(
              1,
              { damping: 5, stiffness: 100, mass: 1 },
              runOnJS(loopAnimation)
            );
          }
        );
      };
      if (runme === 0) {
        loopAnimation();
      }
    }
  }, [focused]);
  const handleFocus = () => {
    //setNoAction(false);
    setFocused2(false);
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
    const re = /\S+@\S+\.\S+/;
    if (email?.split("")?.length > 4 && re.test(email)) {
      setFocused(false);
      setFocused2(true);
    } else {
      FlashMessage("Email is incorrect", "warning");
    }
  };
  const handleFocus2 = () => {
    // setNoAction(false);
    setFocused(false);
    setFocused2(true);
  };
  const handleBlur2 = () => {
    setFocused2(false);
    setNoAction(true);
    setFocused(false);
    //setFocused(true);
  };

  return (
    <KeyboardAwareScrollView
      ref={scrollViewRef}
      keyboardShouldPersistTaps="handled"
      focusable={true}
      scrollEnabled={true}
    >
      <Animated.View key={`${router}`} entering={SlideInDown}>
        <Box ma={moderateScale(10)} position="relative">
          {/* <Toast trigger={trigger} /> */}

          <Animated.View key={`${focused}`}>
            <LottieView
              style={{
                width: "100%",
                height: verticalScale(220),
              }}
              source={require("../../assets/animations/bot.json")}
              autoPlay
              loop
            />
          </Animated.View>
          {next ? (
            <Box>
              <MainButton
                mb={moderateScale(10)}
                height={moderateScale(30)}
                width={moderateScale(60)}
                mx={moderateScale(10)}
                onPress={() => {
                  setNext(!next);
                }}
                color={Colors.theme.mainGrey}
              >
                <MainIcon
                  color={Colors.theme.rentPrimary}
                  source="Entypo"
                  name="chevron-left"
                />
              </MainButton>
              <Box
                ma={moderateScale(10)}
                align="center"
                justify="center"
                direction="row"
              >
                <MainText
                  fontFamily={MYfonts.Nunito_500Medium}
                  size={moderateScale(15)}
                  mx={moderateScale(5)}
                >
                  This you {email ? email : "karanikateeti@gmail.com"}?
                </MainText>
                <MainButton
                  type="transparent"
                  onPress={() => {
                    setNext(!next);
                    textInputRef.current?.focus();
                  }}
                >
                  <MainText
                    fontFamily={MYfonts.Nunito_600SemiBold}
                    color={Colors.theme.rentPrimary}
                    size={moderateScale(15)}
                  >
                    Change
                  </MainText>
                </MainButton>
              </Box>
            </Box>
          ) : (
            <>
              {noAction && (
                <Box mt={-verticalScale(30)} mx={moderateScale(10)}>
                  <MainText
                    size={moderateScale(30)}
                    color={colorScheme === "dark" ? "lightgray" : "#1F4C6B"}
                  >
                    Welcome{" "}
                    <MainText size={moderateScale(30)} color={"#1F4C6B"}>
                      Home
                    </MainText>
                  </MainText>
                  <MainText
                    size={moderateScale(14)}
                    mt={verticalScale(12)}
                    color={colorScheme === "dark" ? "lightgray" : "#53587A"}
                  >
                    create an account below for security purposes
                  </MainText>
                </Box>
              )}
            </>
          )}
          {/* {focused2 && (
          <Box
            mx={moderateScale(10)}
            mb={verticalScale(20)}
            mt={-verticalScale(30)}
            width={moderateScale(400)}
            direction="row"
            align="center"
            justify="flex-start"
          >
            <MainText size={moderateScale(15)}>Welcome {email} </MainText>
            <MainButton type="transparent" mt={2} pa={0}>
              <MainText>change</MainText>
            </MainButton>
          </Box>
        )} */}

          {noAction && (
            <>
              {!next && (
                <Box mt={verticalScale(26)} px={moderateScale(10)}>
                  <EstateInput
                    leftSlot={
                      <MainIcon
                        size={moderateScale(25)}
                        color={"#252B5C"}
                        source="Ionicons"
                        name="mail-outline"
                      />
                    }
                    active={focused}
                    ref={textInputRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text);
                    }}
                  />
                </Box>
              )}

              {next && (
                <Box mt={verticalScale(10)} px={moderateScale(10)}>
                  <EstateInput
                    leftSlot={
                      <MainIcon
                        size={moderateScale(23)}
                        color={"#252B5C"}
                        source="Feather"
                        name="lock"
                      />
                    }
                    focusable={false}
                    active={focused2}
                    rightSlot={
                      secureTextEntry ? (
                        <MainButton
                          onPress={() => {
                            setSecureTextEntry(!secureTextEntry);
                          }}
                          type="transparent"
                          pa={moderateScale(5)}
                        >
                          <MainIcon
                            size={moderateScale(20)}
                            color={"#252B5C"}
                            source="Feather"
                            name="eye"
                          />
                        </MainButton>
                      ) : (
                        <MainButton
                          onPress={() => {
                            setSecureTextEntry(!secureTextEntry);
                          }}
                          type="transparent"
                          pa={moderateScale(5)}
                        >
                          <MainIcon
                            size={moderateScale(20)}
                            color={"#252B5C"}
                            source="Feather"
                            name="eye-off"
                          />
                        </MainButton>
                      )
                    }
                    ref={textInputRef2}
                    onFocus={handleFocus2}
                    onBlur={handleBlur2}
                    placeholder="Password"
                    secureTextEntry={secureTextEntry}
                  />
                </Box>
              )}
              <Box
                width={ScreenWidth * 0.87}
                align="center"
                direction="row"
                alignSelf="center"
                ma={moderateScale(10)}
                justify="space-between"
              >
                <MainButton type="transparent">
                  <MainText
                    size={moderateScale(13)}
                    fontFamily={MYfonts.Nunito_700Bold}
                    color={
                      colorScheme === "dark" ? "#FFF" : Colors.theme.rentPrimary
                    }
                  >
                    Forgot Password?
                  </MainText>
                </MainButton>
                <MainButton type="transparent">
                  <MainText
                    size={moderateScale(13)}
                    fontFamily={MYfonts.Nunito_700Bold}
                    color={
                      colorScheme === "dark" ? "#FFF" : Colors.theme.rentPrimary
                    }
                  >
                    Show password
                  </MainText>
                </MainButton>
              </Box>
              {next ? (
                <Box align="center" justify="center" width={"100%"}>
                  <MainButton
                    height={moderateScale(50)}
                    color={Colors.theme.darkGreen}
                    mt={verticalScale(10)}
                    alignSelf="center"
                    width={"50%"}
                    onPress={() => {
                      setNext(!next);
                      // textInputRef2.current?.focus();
                    }}
                  >
                    <MainText
                      color={"#FFFFFF"}
                      fontFamily={MYfonts.Nunito_600SemiBold}
                    >
                      Login
                    </MainText>
                  </MainButton>
                </Box>
              ) : (
                <Box align="center" justify="center" width={"100%"}>
                  <MainButton
                    height={moderateScale(50)}
                    color={Colors.theme.darkGreen}
                    mt={verticalScale(10)}
                    alignSelf="center"
                    width={"50%"}
                    onPress={() => {
                      setNext(!next);
                      // textInputRef2.current?.focus();
                    }}
                  >
                    <MainText
                      color={"#FFFFFF"}
                      fontFamily={MYfonts.Nunito_600SemiBold}
                    >
                      Next
                    </MainText>
                  </MainButton>
                </Box>
              )}
              <Box
                direction="row"
                justify="center"
                ma={moderateScale(10)}
                width={ScreenWidth * 0.89}
                align="center"
                mt={verticalScale(50)}
              >
                <Box
                  height={1}
                  width={ScreenWidth * 0.4}
                  color={Colors.theme.mainGrey}
                />
                <Box align="center" width={ScreenWidth * 0.1}>
                  <MainText
                    size={moderateScale(12)}
                    color={Colors.theme.mainDarkGrey}
                  >
                    OR
                  </MainText>
                </Box>
                <Box
                  height={1}
                  width={ScreenWidth * 0.4}
                  color={Colors.theme.mainGrey}
                />
              </Box>
              <Box
                ma={moderateScale(10)}
                width={ScreenWidth * 0.89}
                align="center"
                direction="row"
                justify="space-between"
              >
                <MainButton
                  color={Colors.theme.estateGrey}
                  height={verticalScale(60)}
                  width={ScreenWidth * 0.4}
                  align="center"
                  justify="center"
                  radius={moderateScale(15)}
                  type="transparent"
                >
                  <ImageIcon
                    source={require("../../assets/icons/google.png")}
                    size={moderateScale(30)}
                  />
                </MainButton>
                <MainButton
                  color={Colors.theme.estateGrey}
                  height={verticalScale(60)}
                  width={ScreenWidth * 0.4}
                  align="center"
                  justify="center"
                  radius={moderateScale(15)}
                  type="transparent"
                >
                  <ImageIcon
                    source={require("../../assets/icons/facebook.png")}
                    size={moderateScale(30)}
                  />
                </MainButton>
              </Box>
              <Box
                align="center"
                width={ScreenWidth * 0.89}
                ma={moderateScale(10)}
                mt={verticalScale(20)}
                direction="row"
                justify="center"
              >
                <MainText
                  fontFamily={MYfonts.Nunito_600SemiBold}
                  color={Colors.theme.mainDarkGrey}
                  size={moderateScale(14)}
                >
                  Already have an account?{" "}
                </MainText>
                <MainButton
                  onPress={() => {
                    router.push("/(auth)/signin/");
                  }}
                  type="transparent"
                >
                  <MainText
                    size={moderateScale(14)}
                    color={Colors.theme.rentPrimary}
                    fontFamily={MYfonts.Nunito_700Bold}
                  >
                    Login
                  </MainText>
                </MainButton>
              </Box>
            </>
          )}
          {/**: (
          <>
            {focused ? (
              <Box
                mt={focused ? -verticalScale(15) : verticalScale(20)}
                px={moderateScale(10)}
              >
                <EstateInput
                  leftSlot={
                    <MainIcon
                      size={moderateScale(25)}
                      color={"#252B5C"}
                      source="Ionicons"
                      name="mail-outline"
                    />
                  }
                  ref={textInputRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                  }}
                />
              </Box>
            ) : (
              <Box mt={verticalScale(10)} px={moderateScale(10)}>
                <EstateInput
                  leftSlot={
                    <MainIcon
                      size={moderateScale(23)}
                      color={"#252B5C"}
                      source="Feather"
                      name="lock"
                    />
                  }
                  rightSlot={
                    secureTextEntry ? (
                      <MainButton
                        onPress={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                        type="transparent"
                        pa={moderateScale(5)}
                      >
                        <MainIcon
                          size={moderateScale(23)}
                          color={"#252B5C"}
                          source="Feather"
                          name="eye"
                        />
                      </MainButton>
                    ) : (
                      <MainButton
                        onPress={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                        type="transparent"
                        pa={moderateScale(5)}
                      >
                        <MainIcon
                          size={moderateScale(23)}
                          color={"#252B5C"}
                          source="Feather"
                          name="eye-off"
                        />
                      </MainButton>
                    )
                  }
                  ref={textInputRef2}
                  onFocus={handleFocus2}
                  onBlur={handleBlur2}
                  placeholder="Password"
                  secureTextEntry={secureTextEntry}
                />
              </Box>
            )}
          </>
        )} */}
          {/* {focused && (
          <Box align="center" justify="center" width={"100%"}>
            <MainButton
              height={moderateScale(50)}
              color={Colors.theme.darkGreen}
              mt={verticalScale(30)}
              alignSelf="center"
              width={"80%"}
              onPress={() => {
                setFocused(false);
                setFocused2(true);
                // textInputRef2.current?.focus();
              }}
            >
              <MainText>Next</MainText>
            </MainButton>
          </Box>
        )} */}
          {/* {focused2 && (
          <Box align="center" justify="center" width={"100%"}>
            <MainButton
              height={moderateScale(50)}
              color={Colors.theme.darkGreen}
              mt={verticalScale(30)}
              alignSelf="center"
              width={"80%"}
              onPress={() => {
                setFocused(false);
                setFocused2(true);
                textInputRef2.current?.focus();
              }}
            >
              <MainText>Login</MainText>
            </MainButton>
          </Box>
        )} */}
        </Box>
      </Animated.View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpMainContainer;

const styles = StyleSheet.create({});
