module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '~/navigation': './src/navigation',
          '~/pages': './src/pages',
          '~/types': './src/types',
          '~/assets': './src/assets',
          '~/images': './src/assets/image',
          '~/store': './src/store',
        },
      },
    ],
  ],
};
