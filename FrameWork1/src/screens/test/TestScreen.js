import React, { Component } from "react";
import { Text } from "react-native";

class TestScreen extends Component {
  render() {
    return <Text>Test Screen!!!!</Text>;
  }
}

TestScreen.navigationOptions = {
  title: "Test",
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default TestScreen;
