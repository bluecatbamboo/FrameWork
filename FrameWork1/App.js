/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import store from "./src/initStore";
import AppNavigator from "./navigation/MainNavigator";
import { ThemeProvider } from "styled-components";
import Theme from "./Theme";

const AppContainer = createAppContainer(AppNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={Theme}>
          <AppContainer />
        </ThemeProvider>
      </Provider>
    );
  }
}
