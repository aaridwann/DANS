module.exports = {
  transform: {
    "\\.[jt]sx?$": "babel-jest",
    "\\.css$": "some-css-transformer",
    "^.+\\.js$": "babel-jest",
    "\\.svg$": "<rootDir>/fileTransformer.js",
  },
};
