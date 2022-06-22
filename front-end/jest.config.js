const nextJest = require("next/jest");
const tsConfig = require("./tsconfig");
// const { pathsToModuleNameMapper } = require("ts-jest");
const moduleNameMapper = require("tsconfig-paths-jest")(tsConfig);

const createJestConfig = nextJest({
  dir: ".",
});

const customJestConfig = {
  preset: "ts-jest",
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper,
  modulePaths: ["<rootDir>"],
};

module.exports = createJestConfig(customJestConfig);
