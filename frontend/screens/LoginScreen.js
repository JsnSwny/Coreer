import React, { useState } from "react";
import {
  Text,
  Pressable,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import Header from "../components/Header";
import axios from "axios";
import colors from "../config/colors";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handlePress = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    // Request Body
    const body = JSON.stringify({ username, password });
    console.log(body);
    axios
      .post("http://192.168.1.125:8000/api/auth/login", body, config)
      .then((res) => {
        console.log("LOGGED IN");
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log("error");
        console.log(err);
      });
  };
  return (
    <SafeAreaView>
      <Header title="Coreer" />
      <View style={styles.image}>
        <Image source={require("../assets/login-vector.png")} />
      </View>
      <Text style={styles.text}>Login</Text>
      <View style={styles.form}>
        <TextInput
          onChangeText={setUsername}
          value={username}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
    marginTop: 24,
  },
  form: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  input: {
    backgroundColor: "#fff",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: colors.grey,
    borderColor: colors.stroke,
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginScreen;