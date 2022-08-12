module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@assets': './assets',
                        '@app': './src/app',
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
