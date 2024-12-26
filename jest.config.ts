module.exports = {
    preset: 'ts-jest',
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transformIgnorePatterns: ['/node_modules/'],
  };