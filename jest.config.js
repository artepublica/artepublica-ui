module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./src/utils/jest/jestHelper.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
  ],
  testMatch: ['**/*.(spec).(ts|tsx)'],
  moduleNameMapper: {
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@app': '<rootDir>/src/app',
    '^@base-components': '<rootDir>/src/base-components',
    '^@components': '<rootDir>/src/components',
    '^@domain': '<rootDir>/src/domain',
    '^@pages': '<rootDir>/src/pages',
    '^@utils': '<rootDir>/src/utils',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  clearMocks: true,
  collectCoverage: false,
};
