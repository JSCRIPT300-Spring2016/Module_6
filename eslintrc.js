module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
      //proper indentation of 2 spaces
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        //always use single quotes
        "quotes": [
            "error",
            "single"
        ],
        //using semi-colons to terminate statements
        "semi": [
            "error",
            "always"
        ],
        //no use of undefined variables unless part of a global block
        "no-undef": [
          "error",
          { "typeof": true }
        ],
        //no unused variable definitions
        "no-unused-vars": [
          "error",
          { "vars": "all" }
        ],
        //always use strict equality/inequality
        "eqeqeq": [
          "error"
        ],
        //no console statements left behind
        "no-console": [
          "error"
        ],
        //no dangling commas in object definitions
        "comma-dangle": [
          "error",
          "never"
        ],
        //max line length of 80 characters with 2 space for indentation (can ignore urls)
        "max-len": [
          "error",
          { "ignoreUrls": true }
        ],
        //no trailing spaces on a line
        "no-trailing-spaces": [
          "error",
          { "skipBlankLines": true }
        ],
        //require spacing inside curly brackets for objects
        "object-curly-spacing": [
          "error",
          "always"
        ],
        //enforce a newline before a return statement
        "newline-before-return": [
          "error"
        ]
    }
};
