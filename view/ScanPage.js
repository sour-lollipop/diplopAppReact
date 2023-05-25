import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Scan screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    paddingHorizontal: 16,
    paddingTop: 24,
    margin: 8,
  },
});

export default ScanScreen;
