import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { navigatingExample } from "../test/navigator";
import { Box, Flex, Text } from "src/components";

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>
          alsdklakd;sakdl;aksd;ladk;salkd;lksa;dkal;kd;k;ka;lksdla;kd;ak
        </Text>
        <TouchableOpacity onPress={() => navigatingExample(this.props)}>
          <Text>Click to test pg</Text>
        </TouchableOpacity>
        <Flex flexDirection="row">
          <Box bg="green">
            <Box height={100} />
          </Box>
        </Flex>
        <Text color="green">asdkjaksdj</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: "#f4511e"
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

export default HomeScreen;
