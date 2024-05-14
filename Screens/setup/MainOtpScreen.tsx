import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Box from "@/components/Globals/Box";
import MainText from "@/components/Globals/MainText";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { moderateScale } from "react-native-size-matters";

type Props = {};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: { marginTop: 20, padding: moderateScale(10) },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    backgroundColor: "#F5F4F8",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});
const CELL_COUNT = 4;
const MainOtpScreen = ({}: Props) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <Box>
      <MainText>
        Enter the <MainText>code</MainText>
      </MainText>
      <Box>
        <MainText>
          Enter the 4 digit code that we just sent to karanikateeti@gmail.com{" "}
        </MainText>
      </Box>
      <Box mx={moderateScale(40)}>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: "sms-otp",
            default: "one-time-code",
          })}
          testID="my-code-input"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </Box>
    </Box>
  );
};

export default MainOtpScreen;
