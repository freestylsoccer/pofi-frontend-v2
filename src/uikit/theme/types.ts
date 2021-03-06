export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  inverseBubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  bg0: string;
  bg1: string;
  bg2: string;
  bg3: string;
  bg4: string;
  bg5: string;
  bg6: string;
  modalBG: string;
  advancedBG: string;
  primary1: string;
  primary2: string;
  primary3: string;
  primary4: string;
  primary5: string;
  primaryText1: string;
  secondary1: string;
  secondary2: string;
  secondary3: string;
  red1: string;
  red2: string;
  green1: string;
  blue1: string;
  blue2: string;
  error: string;
  blue4: string;
  blue5: string;
  black: string;
  white: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
