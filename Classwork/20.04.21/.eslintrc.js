module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "no-loops"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:jest/all",
    ],
    rules: {
      "no-loops/no-loops": 2,
    },
    overrides: [
      {
        files: ["**/*.spec.ts"],
        env: {
          jest: true,
        },
      },
    ],
  };