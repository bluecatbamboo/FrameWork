import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { deleteTodo } from "./ducks";

// the component which name is TodoItem
class TodoItem extends PureComponent {
  render() {
    const { name, deleteTodo } = this.props;
    return (
      <>
        {name && (
          <View style={styles.itemView}>
            <Text> {name} </Text>
            <TouchableOpacity onPress={() => deleteTodo(name)}>
              <Image style={styles.img} source={require("./img/close.png")} />
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  itemView: {
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  img: {
    width: 15,
    height: 15
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  deleteTodo
};

TodoItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);

export default TodoItem;
