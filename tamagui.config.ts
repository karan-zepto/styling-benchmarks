import {
  createTamagui,
  styled,
  SizableText,
  H1,
  YStack,
  Button as ButtonTamagui,
  createTokens,
} from 'tamagui';

export const Container = styled(YStack, {
  flex: 1,
  padding: 24,
});

export const Main = styled(YStack, {
  flex: 1,
  justifyContent: 'space-between',
  maxWidth: 960,
});

export const Title = styled(H1, {
  color: '#000',
  size: '$12',
});

export const Subtitle = styled(SizableText, {
  color: '#38434D',
  size: '$9',
});

export const Button = styled(ButtonTamagui, {
  backgroundColor: '#6366F1',
  borderRadius: 28,
  hoverStyle: {
    backgroundColor: '#5a5fcf',
  },
  pressStyle: {
    backgroundColor: '#5a5fcf',
  },
  maxWidth: 500,

  // Shaddows
  shadowColor: '#000',
  shadowOffset: {
    height: 2,
    width: 0,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  // Button text
  color: '#FFFFFF',
  fontWeight: '600', // Is not passed down to the text. Probably a bug in Tamagui: https://github.com/tamagui/tamagui/issues/1156#issuecomment-1802594930
  fontSize: 16,
});

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

type AppConfig = typeof config;

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
