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

const Signup = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState(null);

  const Sendtobackend = () => {
    // console.log(fdata);
    if (
      fdata.email == "" ||
      fdata.name == "" ||
      fdata.phone == "" ||
      fdata.password == ""
    ) {
      return Alert.alert("All fields are required");
    }
    else{
        fetch('http://127.0.0.1:8000/users')
    }
  };
  return (
    <View>
      <Image
        style={styles.imageTop}
        source={require("../assets/welcome.jpg")}
      />
      <View style={styles.container}>
        <Text style={styles.Signintitle}>Sign up</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, email: text })}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, name: text })}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone number"
          placeholderTextColor={"#B3B3B3"}
          onChangeText={(text) => setFdata({ ...fdata, phone: text })}
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
