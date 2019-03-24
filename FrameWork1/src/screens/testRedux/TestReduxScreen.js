import React, { PureComponent } from "react";
import { View, FlatList, Button, TextInput, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { addTodo, getTodoList } from "./ducks";
import TodoItem from "./TodoItem";

class TestReduxScreen extends PureComponent {
  //defalut state
  state = {
    inputVisible: false,
    text: ""
  };

  changeInVisible = () =>
    this.setState({ inputVisible: !this.state.inputVisible });

  clearInput = () => this.setState({ text: "" });

  render() {
    const { addTodo, todoList } = this.props;
    return (
      <View>
        <FlatList
          data={todoList}
          renderItem={({ item, index }) => {
            return <TodoItem key={index} name={item} />;
          }}
        />
        <TodoItem />
        {this.state.inputVisible && (
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        )}
        <Button
          onPress={() => {
            this.changeInVisible();
            if (!this.state.inputVisibl) {
              this.clearInput();
            }
          }}
          title={this.state.inputVisible ? "cancle" : "add to do"}
          color="#841584"
        />
        {!!this.state.text && (
          <Button
            onPress={() => {
              addTodo(this.state.text);
              this.clearInput();
            }}
            title="confirm"
            color="#841584"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3
  }
});

const mapStateToProps = state => {
  //   console.log(state); // log store
  return {
    todoList: getTodoList(state) || []
  };
};

const mapDispatchToProps = {
  addTodo
};

TestReduxScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestReduxScreen);

TestReduxScreen.navigationOptions = {
  title: "todo"
};

export default TestReduxScreen;
