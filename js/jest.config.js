module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@solutions/(.*)$': '<rootDir>/src/solutions/$1'
  }
};