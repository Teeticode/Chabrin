import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Box from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { moderateScale } from "react-native-size-matters";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
}

export interface Rating {
  count: number;
  rate: number;
}
type Props = {
  data: Product;
};

const Card = ({ data }: Props) => {
  return (
    <Box
      color={"red"}
      radius={moderateScale(15)}
      width={ScreenWidth * 0.85}
      height={ScreenHeight * 0.65}
    >
      <Box
        radiusTop={moderateScale(15)}
        color={"blue"}
        width={"100%"}
        height={"75%"}
      >
        <ImageBackground source={{ uri: data.image }} />
      </Box>
    </Box>
  );
};

export default Card;

const styles = StyleSheet.create({});
