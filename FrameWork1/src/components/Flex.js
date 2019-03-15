import React, { PureComponent } from "react";
import { Flex as FlexOri } from "rebass-native";
import { spaces, size, border, bgColor, flex } from "./type";
import { getPixelSize } from "FrameWork1/Theme";

type Props = spaces & size & border & bgColor & flex;
class Flex extends PureComponent<Props> {
  render() {
    const { width, height, borderRadius, borderWidth, ...props } = this.props;
    return (
      <FlexOri
        width={getPixelSize(width)}
        height={getPixelSize(height)}
        borderRadius={getPixelSize(borderRadius)}
        borderWidth={getPixelSize(borderWidth)}
        {...props}
      />
    );
  }
}
export default Flex;
