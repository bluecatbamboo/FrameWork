import { HomeScreen, TestScreen } from "../src/screens";
import { createStackNavigator } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test: TestScreen
  },
  {
    initialRouteName: "Home"
  }
);
export default AppNavigator;
