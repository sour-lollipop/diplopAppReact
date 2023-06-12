import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.Signintitle}>Sign in</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={"#B3B3B3"}
        ></TextInput>
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#B3B3B3"}
        ></TextInput>
        <View style={styles.siginbutton}>
          <Button
            title="SIGN IN"
            color={"#0713CD"}
            onPress={(e) => {
              account = 1;
            }}
          />
        </View>
      </View>
      <Text style={styles.continue}>
        Don't have account?
        <Text style={styles.Signup}> Sign up</Text>
      </Text>
      <Image
        style={styles.imageBottom}
        source={require("../assets/almaty_siluet.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBottom: {
    marginTop: "30%",
    width: "100%",
    height: "20%",
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
