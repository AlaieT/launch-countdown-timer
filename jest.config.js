/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverage: true,
  rootDir: "./",
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    "^.+\\.(css|sass|scss)$": "<rootDir>/src/__mocks__/styleMock.js",

    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i":
      "<rootDir>/src/__mocks__/fileMock.js",

    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
