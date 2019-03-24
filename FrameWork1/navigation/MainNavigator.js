import { HomeScreen, TestScreen, TestReduxScreen } from "../src/screens";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    TestRedux: TestReduxScreen,
    Home: HomeScreen,
    Test: TestScreen
  },
  {
    initialRouteName: "TestRedux"
  }
);
export default AppNavigator;
