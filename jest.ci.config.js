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
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/app/**/*.{ts,tsx}',
    '!src/base-components/dropdown/**/*.{ts,tsx}',
    '!src/base-components/map/**/*.{ts,tsx}',
    '!src/base-components/table/**/*.{ts,tsx}',
    '!src/base-components/image/**/*.{ts,tsx}',
    '!src/components/tabela-tipo-obras/**/*.{ts,tsx}',
    '!src/utils/analises/**/*.{ts,tsx}',
    '!src/utils/export-as-image/**/*.{ts,tsx}',
    '!src/utils/data/**/*.{ts,tsx}',
    '!src/utils/list/**/*.{ts,tsx}',
    '!src/utils/db/**/*.{ts,tsx}',
    '!src/utils/theme-provider/**/*.{ts,tsx}',
    '!src/pages/**/*.{ts,tsx}',
    '!src/providers/**/*.{ts,tsx}',
    '!src/changeImagesSize.ts',
  ],
  coverageDirectory: '.coverage',
  coveragePathIgnorePatterns: [
    'index.ts',
    'index.tsx',
    'src/domain',
    'src/utils/data',
    'src/utils/theme-provider/domain',
    'src/utils/theme-provider/themes',
    'src/base-components/chart/ChartDark.web.tsx',
    'src/base-components/chart/ChartLight.web.tsx',
    'src/base-components/map/Map.web.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '.coverage',
        outputName: 'jest-junit.xml',
      },
    ],
    [
      'jest-html-reporters',
      {
        publicPath: '.coverage/.report',
        filename: 'report.html',
      },
    ],
  ],
};
