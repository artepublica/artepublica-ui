import { ConfigContext, ExpoConfig } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: config.name ?? 'arte-publica-permanente',
  slug: config.slug ?? 'arte-publica-permanente',
  extra: {
    ...config.extra,
    googleMapsAPI: process.env.GOOGLE_MAPS_API_WEB || '',
  },
  android: {
    ...config.android,
    permissions: ['INTERNET', 'ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION', 'ACCESS_NETWORK_STATE'],
    config: {
      ...config.android?.config,
      googleMaps: {
        apiKey: process.env.GOOGLE_MAPS_API_ANDROID,
      },
    },
  },
  ios: {
    ...config.ios,
    config: {
      ...config.ios?.config,
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_IOS,
    },
  },
  plugins: [
    'expo-router',
    'expo-font',
    'expo-web-browser',
    [
      'expo-build-properties',
      {
        android: {
          defaultConfig: {
            minSdkVersion: 30,
          },
        },
      },
    ],
  ],
});
