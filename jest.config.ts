// jest.config.js
const {defaults} = require('jest-config');
module.exports = {
  // ...
  testRegex: "(/__test__/.*|(\\.|/)(test|spec|pact))\\.tsx?$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  // ...
};

