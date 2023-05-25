import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>This is the Profile screen123123132123</Text>
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

export default ProfileScreen;