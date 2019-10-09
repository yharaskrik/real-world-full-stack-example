module.exports = {
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  passWithNoTests: true,
  collectCoverage: true,
  coverageReporters: ['json', 'html', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/index.ts',
    '!**/test-setup.ts'
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        'outputDirectory': 'test-results/jest',
        'outputName': 'results.xml'
      }
    ]
  ]
};
