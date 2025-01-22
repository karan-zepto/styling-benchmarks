const path = require('path');

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        resolvePath(sourcePath) {
          if (sourcePath === '../implementations/ReactNativeRenderer-prod') {
            return path.resolve(
              __dirname,
              './node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-profiling',
            );
          }
          return undefined;
        },
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './tamagui.config.ts',
        logTimings: true
      }
    ],
  ],
};