module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@app': './src/app',
            '@base-components': './src/base-components',
            '@components': './src/components',
            '@domain': './src/domain',
            '@pages': './src/pages',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
