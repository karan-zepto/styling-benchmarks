import {createTamagui, createTokens} from 'tamagui';

export const tokens = createTokens({
  size: {
    1: 1,
    4: 4,
    5: 5,
    true: 5,
  },
  color: {
    red: '#FF0000',
    blue: '#0000FF',
  },
  space: {
    1: 1,
    4: 4,
    5: 5,
    true: 5,
  },
  radius: {0: 0, 1: 3},
  zIndex: {0: 0, 1: 100, 2: 200},
});

const config = createTamagui({
  tokens,
  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.red,
    },
    dark: {
      bg: '#111',
      color: tokens.color.blue,
    },
  },
});

type Conf = typeof config;

// get nice types
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
