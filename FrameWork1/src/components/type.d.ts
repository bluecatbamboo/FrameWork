export interface spaces {
  px?: number;
  py?: number;
}

export interface size {
  width?: number;
  height?: number;
}

export interface border {
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
}

export interface bgColor {
  bg?: string;
}

export interface text {
  fontSize?: number | Array<number>;
  fontWeights?: number | string;
  color?: string;
}

export interface flex {
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}
