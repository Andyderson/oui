module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jquery": true,
    "amd": true,
    "commonjs": true,
    "node": true,
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
    },
    "sourceType": "module",
  },
  "globals": {
    // Legacy JavaScript
    "ouiGetProps": true,
    "ouiShowPop": true,
    // Jest Globals
    // https://facebook.github.io/jest/docs/api.html#globally-injected-variables
    "afterEach": true,
    "beforeEach": true,
    "describe": true,
    "expect": true,
    "it": true,
    "fit": true,
    "jest": true,
    "pit": true,
    "require": true,
    "require.requireActual": true,
    "spyOn": true,
    "xdescribe": true,
    "xit": true,
  },
  "plugins": [
    "react"
  ],
  "extends": ["plugin:react/recommended"],
  "rules": {
    // Optimizely rules
    "comma-dangle": ["warn", "always-multiline"],
    "no-cond-assign": "warn",
    "no-console": "warn",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "warn",
    "no-dupe-args": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "warn",
    "no-func-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "warn",
    "no-irregular-whitespace": "warn",
    "no-negated-in-lhs": "warn",
    "no-obj-calls": "warn",
    "no-regex-spaces": "warn",
    "quote-props": "warn",
    "no-sparse-arrays": "warn",
    "no-unreachable": "warn",
    "use-isnan": "warn",
    "valid-jsdoc": "off",
    "valid-typeof": "warn",
    "block-scoped-var": "warn",
    "complexity": "off",
    "consistent-return": "off",
    "curly": "warn",
    "default-case": "warn",
    "dot-notation": "off",
    "dot-location": ["warn", "property"],
    "eqeqeq": "warn",
    "guard-for-in": "warn",
    "no-alert": "warn",
    "no-caller": "warn",
    "no-div-regex": "off",
    "no-else-return": "warn",
    "no-eq-null": "warn",
    "no-eval": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-fallthrough": "warn",
    "no-floating-decimal": "warn",
    "no-implied-eval": "warn",
    "no-iterator": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "off",
    "no-native-reassign": "warn",
    "no-new": "off",
    "no-new-func": "warn",
    "no-new-wrappers": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-param-reassign": "off",
    "no-process-env": "off",
    "no-proto": "warn",
    "no-redeclare": "warn",
    "no-return-assign": "warn",
    "no-script-url": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-throw-literal": "warn",
    "no-unused-expressions": "warn",
    "no-void": "warn",
    "no-warning-comments": "off",
    "no-with": "off",
    "radix": "warn",
    "vars-on-top": "off",
    "wrap-iife": ["error", "any"],
    "yoda": ["warn", "never", {"exceptRange": true}],
    "strict": "off",
    "no-catch-shadow": "off",
    "no-delete-var": "warn",
    "no-label-var": "off",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "warn",
    "no-undef": "error",
    "no-undef-init": "warn",
    "no-undefined": "off",
    "no-unused-vars": ["warn", {"vars": "all", "args": "none"}],
    "no-use-before-define": "off",
    "indent": ["warn", 2, {"SwitchCase": 1}],
    "brace-style": ["warn", "1tbs", {"allowSingleLine": true}],
    "camelcase": "off",
    "comma-spacing": "warn",
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-names": "off",
    "func-style": "off",
    "key-spacing": ["warn", {
      "beforeColon": false,
      "afterColon": true
    }],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "linebreak-style": "off",
    "max-nested-callbacks": "off",
    "new-cap": ["warn", {"newIsCap": true, "capIsNew": false}],
    "new-parens": "error",
    "newline-after-var": "off",
    "no-array-constructor": "warn",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "warn",
    "no-mixed-spaces-and-tabs": "warn",
    "no-multiple-empty-lines": ["warn", {"max": 2}],
    "no-nested-ternary": "warn",
    "no-new-object": "warn",
    "no-spaced-func": "warn",
    "no-ternary": "off",
    "no-trailing-spaces": "warn",
    "no-underscore-dangle": "off",
    "one-var": ["warn", "never"],
    "operator-assignment": "off",
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "quote-props": "off",
    "quotes": ["warn", "single"],
    "semi": ["warn", "always"],
    "semi-spacing": ["warn", {"before": false, "after": true}],
    "sort-vars": "off",
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", "never"],
    "space-in-brackets": "off",
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", {"words": true, "nonwords": false}],
    "spaced-comment": ["warn", "always", {"exceptions": ["-"]}],
    "wrap-regex": "off",
    "max-depth": "off",
    "max-len": "off",
    "max-params": "off",
    "max-statements": "off",
    "no-bitwise": "off",
    "no-plusplus": "off",

    // OUI rules
    "react/jsx-indent-props": ["warn", 2],
    "react/no-comment-textnodes": ["warn"],
    "react/no-direct-mutation-state": ["warn"],
    "react/no-unknown-property": ["warn"],
    "react/prefer-stateless-function": ["warn"],
    "react/prop-types": ["warn"],
    "react/react-in-jsx-scope": ["warn"],
    "react/require-extension": ["warn"],
    "react/sort-prop-types": ["warn"],
    "react/wrap-multilines": ["warn"],
    "react/jsx-boolean-value": ["warn", "always"],
    "react/jsx-closing-bracket-location": ["warn", {
      "selfClosing": "tag-aligned",
      "nonEmpty": "after-props",
    }],
    "react/jsx-curly-spacing": ["warn", "always"],
    "react/jsx-equals-spacing": ["warn", "never"],
    "react/jsx-filename-extension": ["warn", { "extensions": [".js"] }],
    "react/jsx-first-prop-new-line": ["warn", "multiline"],
    "react/jsx-indent": ["warn", 2],
    "react/jsx-indent-props": ["warn", 2],
    "react/jsx-key": ["warn"],
    "react/jsx-no-bind": ["warn"],
    "react/jsx-no-duplicate-props": ["warn"],
    "react/jsx-no-target-blank": ["warn"],
    "react/jsx-no-undef": ["warn"],
    "react/jsx-pascal-case": ["warn"],
    "react/jsx-space-before-closing": ["warn", "always"],
    "valid-jsdoc": ["warn", {
      "prefer": {
        "return": "returns",
      },
      "preferType": {
        "String": "String",
        "Number": "Number",
        "object": "Object",
        "array": "Array",
        "function": "Function",
      },
      "requireReturnDescription": false,
      "requireReturn": false,
    }],
    "max-len": ["warn", {
      "code": 130,
      "comments": 80,
      "ignorePattern": "eslint-disable",
      "ignoreUrls": true,
    }]
  },
};
