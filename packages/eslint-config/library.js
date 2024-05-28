const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** 
 * ESLint Configuration
 * 
 * Extends eslint:recommended, prettier, and eslint-config-turbo
 * Plugins: only-warn
 * Globals: React, JSX
 * Environment: Node.js
 * Settings: TypeScript resolver with project path
 * Ignored patterns: Dotfiles, node_modules/, dist/
 */
module.exports = {
  extends: ["eslint:recommended", "prettier", "eslint-config-turbo"],
  plugins: ["only-warn"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*",
    // Ignore node_modules and dist directories
    "node_modules/",
    "dist/",
    // Ignore test files
    "**/*.test.js",
    "**/*.spec.js",
    "**/*.test.ts",
    "**/*.spec.ts",
  ],
  overrides: [
    // Override configurations for specific file types or directories
    {
      files: ["*.js?(x)", "*.ts?(x)"],
      // Add specific rules or configurations for JavaScript and TypeScript files
      // For example:
      // rules: {
      //   "no-console": "warn",
      // }
    },
  ],
};
