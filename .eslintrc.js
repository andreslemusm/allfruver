module.exports = {
  env: { node: true, es6: true },
  extends: ["eslint:recommended", "prettier"],
  root: true,
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      env: {
        browser: true,
        es2021: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/strict",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:functional/external-recommended",
        "plugin:functional/no-mutations",
        "plugin:functional/no-object-orientation",
        "plugin:@next/next/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      plugins: [
        "react",
        "react-hooks",
        "jsx-a11y",
        "@typescript-eslint",
        "import",
        "unicorn",
        "prefer-arrow",
        "functional",
      ],
      rules: {
        "line-comment-position": ["error", "above"],
        "multiline-comment-style": ["error", "starred-block"],
        "no-console": "error",
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "return" },
        ],
        "prefer-arrow-callback": "error",
        "sort-imports": [
          "error",
          {
            memberSyntaxSortOrder: ["single", "all", "multiple", "none"],
          },
        ],
        "functional/immutable-data": [
          "error",
          {
            ignoreImmediateMutation: true,
            /**
             * @description `*.current` property is used by React refs to persist a value for the full lifetime of the component.
             * @link https://reactjs.org/docs/hooks-reference.html#useref
             * s
             * @description `*.displayName` property is used for better DX.
             * @link https://reactjs.org/docs/forwarding-refs.html#displaying-a-custom-name-in-devtools
             * @link https://reactjs.org/docs/context.html#contextdisplayname
             */
            ignoreAccessorPattern: ["*.current", "*.displayName"],
          },
        ],
        "functional/no-loop-statement": "error",
        "import/dynamic-import-chunkname": [
          "error",
          { webpackChunknameFormat: "[a-z-]+" },
        ],
        "import/export": "error",
        "import/exports-last": "error",
        "import/first": "error",
        "import/group-exports": "error",
        "import/newline-after-import": "error",
        "import/no-absolute-path": "error",
        "import/no-cycle": ["error", { ignoreExternal: true }],
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": [
          "error",
          { optionalDependencies: false },
        ],
        "import/no-named-as-default": "error",
        "import/no-named-default": "error",
        "import/no-namespace": "error",
        "import/no-self-import": "error",
        "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
        "import/no-webpack-loader-syntax": "error",
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "unicorn/filename-case": "error",
        "react/jsx-fragments": ["error", "element"],
        "react/function-component-definition": [
          "error",
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "react/destructuring-assignment": ["error", "always"],
        "prefer-arrow/prefer-arrow-functions": [
          "error",
          { disallowPrototype: true },
        ],
        /**
         * Typescript doesn't allow storing narrowing in booleans for further narrowing
         * @link https://github.com/microsoft/TypeScript/issues/24865
         */
        "@typescript-eslint/no-non-null-assertion": "off",
        /**
         * In the functional react world, you likely will never have a function
         * that actually cares about the this context. Refer to:
         * @link https://github.com/typescript-eslint/typescript-eslint/issues/2245#issuecomment-648712540
         */
        "@typescript-eslint/unbound-method": "off",
        /**
         * This two rules are unnecesary since React v17.0:
         * @link https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
         */
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        /**
         * This rule was deprecated in v6.1.0:
         * @link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
         */
        "jsx-a11y/label-has-for": "off",
        /**
         * By disallow mutating objects and arrays, this rule becomes obsolete.
         */
        "functional/prefer-readonly-type": "off",
        /**
         * OOP patterns are disabled, so this rule is unnecesary.
         */
        "functional/no-mixed-type": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
