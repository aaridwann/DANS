module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(png|gif)$": "<rootDir>/src/__mocks__/img.js",
    "\\.(css)$": "<rootDir>/src/__mocks__/css.js"
  }
};
