module.exports = {
  moduleFileExtensions: ['js', 'svelte'],
  testPathIgnorePatterns: ['node_modules', 'cypress'],
  bail: false,
  verbose: true,
  transformIgnorePatterns: ['node_modules/(?!svelte-select)'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: false }],
  },
  resolver: 'jest-svelte-resolver',
  setupFiles: ['./setupTests.js'],
}
