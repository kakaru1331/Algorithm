module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@solutions/(.*)$': '<rootDir>/src/solutions/$1',
    '^@data-structures/(.*)$': '<rootDir>/src/data-structures/$1'
  }
}
