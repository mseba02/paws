export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-transformer-svg',
    '\\.(gif|ttf|eot|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/'],
};
