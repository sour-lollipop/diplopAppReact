import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import axios from "axios";

const SignupScreen = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    // user_id: "string",
    user_name: "",
    user_email: "",
    user_phone: "",
    password: "",
    // lang: "string",
    // user_favorites: "string",
    // user_image: "string",
  });
  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    // console.log(fdata);
    if (
      fdata.user_email == "" ||
      fdata.user_name == "" ||
      fdata.user_phone == "" ||
      fdata.password == ""
    ) {
      return Alert.alert("All fields are required");
    } else {
      console.log(fdata);

      axios
        .post("http://127.0.0.1:8000/clients", fdata)
        .then((response) => {
          // Обработка успешного ответа
          Alert.alert("Success", response.data.message);
        })
        .catch((error) => {
          // Обработка ошибки
          console.error(error);
          Alert.alert("Error", "An error occurred during registration.");
        });
    }
  };
  return (
    <View>
      {/* <Image
        style={styles.imageTop}
        source={require("../assets/welcome.jpg")}
      /> */}
      <View style={styles.container}>
        <Text style={styles.Signintitle}>Sign up</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, user_email: text })}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, user_name: text })}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone number"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, user_phone: text })}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, password: text })}
        ></TextInput>
        <View style={styles.siginbutton}>
          <Button
            title="SIGN UP"
            color={"#0713CD"}
            onPress={() => {
              Sendtobackend();
            }}
          />
        </View>
      </View>
      <Text style={styles.continue}>
        Already have account?
        <Text style={styles.Signup}> Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageTop: {
    marginTop: "10%",
    width: "100%",
    height: "30%",
  },
  Signintitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    margin: 8,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid",
    margin: 8,
    padding: 5,
    borderRadius: 10,
    borderColor: "#E2E2E2",
  },
  siginbutton: {
    borderRadius: 10,
    overflow: "hidden",
    width: "90%",
    marginTop: 10,
    fontWeight: "bold",
  },
  continue: {
    marginTop: 50,
    margin: 10,
    marginLeft: 100,
  },
  Signup: {
    color: "blue",
  },
});

export default SignupScreen;
