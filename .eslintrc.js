module.exports = {
    plugins: ["@typescript-eslint", "prettier"],
    extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "@typescript-eslint/no-empty-interface": "off",
        "no-empty-interface": "off",
    },
    overrides: [
        {
            files: ["*.js", "*.jsx"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/no-empty-interface": "off",
            },
        },
    ],
};
