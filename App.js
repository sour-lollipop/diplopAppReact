import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  View,
  Text,
  TextInput,
  Image,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  useNavigation,
  Link,
} from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainScreen from "./view/MainPage";
import ProfileScreen from "./view/ProfilePage";
import ScanScreen from "./view/ScanPage";
import LoginPage from "./view/Login";
import SignupPage from "./view/Signup";

const Tab = createBottomTabNavigator();

const App = ({ navigation }) => {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          style={styles.tabBar}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "main") {
                iconName = focused ? "home" : "home";
              } else if (route.name === "scan") {
                iconName = focused ? "qrcode-scan" : "qrcode-scan";
              } else if (route.name === "profile") {
                iconName = focused ? "account" : "account";
              }

              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            },
            tabBarLabel: "",
            tabBarActiveTintColor: "#1573FE",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="scan"
            component={ScanScreen}
            options={{
              headerShown: false,
              tabBarButton: (props) => (
                <TouchableOpacity
                  style={styles.scanButton}
                  onPress={(e) => {
                    props.onPress?.(e);
                  }}
                >
                  <MaterialCommunityIcons
                    name="qrcode-scan"
                    color="white"
                    size={30}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  scanButton: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderColor: "#D0E3FF",
    borderStyle: "solid",
    borderWidth: 5,
    backgroundColor: "#1573FE",
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    top: "-10%",
    // right: "40%",
  },
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
  },
});

export default App;
