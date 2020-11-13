import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import FbScreen from "./screens/FbScreen";
import IntScreen from "./screens/IntScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  FbScreen: { screen: FbScreen },
  IntScreen: { screen: IntScreen },
});
const AppContainer = createAppContainer(TabNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
