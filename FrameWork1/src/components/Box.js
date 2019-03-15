import React, { PureComponent } from "react";
import { Box as BoxOri } from "rebass-native";
import { spaces, size, border, bgColor } from "./type";
import { getPixelSize } from "FrameWork1/Theme";

type Props = spaces & size & border & bgColor;

class Box extends PureComponent<Props> {
  render() {
    const { width, height, borderRadius, borderWidth, ...props } = this.props;
    return (
      <BoxOri
        width={getPixelSize(width)}
        height={getPixelSize(height)}
        borderRadius={getPixelSize(borderRadius)}
        borderWidth={getPixelSize(borderWidth)}
        {...props}
      />
    );
  }
}
export default Box;
