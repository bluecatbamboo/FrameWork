import React, { PureComponent } from "react";
import { View, Text } from "react-native";
// import { connect } from "redux";
import { connect } from "react-redux";
import { addTodo } from "./ducks";

class TestReduxScreen extends PureComponent {
  componentDidMount() {
    const { addTodo } = this.props;
    addTodo(233333);
  }
  render() {
    return (
      <View>
        <Text> action： </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  addTodo
};

TestReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestReduxScreen);

export default TestReduxScreen;
