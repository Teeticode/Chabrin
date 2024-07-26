import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Box from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import Card from "./components/Card";
import { moderateScale } from "react-native-size-matters";
import { ScreenHeight, ScreenWidth } from "@rneui/base";
import { useFocusEffect } from "expo-router";
import axios from "axios";

type Props = {};
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

const AnimationSkia = (props: Props) => {
  const [clothes, setClothes] = useState<Product[]>([]);
  const fetchData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    if (data) {
      setClothes(data.data);
    }
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );
  return (
    <Box
      pa={moderateScale(10)}
      align="center"
      justify="center"
      width={ScreenWidth}
      height={ScreenHeight}
    >
      <FlatList
        data={clothes}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled={true}
        contentContainerStyle={{
          columnGap: 40,
        }}
        renderItem={(item) => {
          return <Card data={item.item} />;
        }}
      />
    </Box>
  );
};

export default AnimationSkia;

const styles = StyleSheet.create({});
