import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const scale = (2 * windowWidth) / 750;

export const getPixelSize = value =>
  typeof value === "number" ? Math.ceil(value * scale) : value;

const space = new Array(21).fill(0).map((v, i) => i * 5);

export default {
  colors: {
    blue: "#6785d0",
    violet: "#b75fb3`",
    yellow: "#b88f3e",
    red: "#cb5658",
    green: "#64a85c",
    primary: "#f4511e"
  },
  space
};
