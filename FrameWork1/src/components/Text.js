import React, { PureComponent } from "react";
import { Text as TextOri } from "rebass-native";
import { text } from "./type";

type Props = text;
class Text extends PureComponent<Props> {
  render() {
    return <TextOri {...this.props} />;
  }
}
export default Text;
