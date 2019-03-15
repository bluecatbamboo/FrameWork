/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from "./navigation/MainNavigator";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
