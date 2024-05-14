import Box from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import { Stack } from "expo-router";

const SetUpMainLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "vertical",
      }}
    />
  );
};

export default SetUpMainLayout;
