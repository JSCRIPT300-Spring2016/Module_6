module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "google":true
        //"trucks":true
        //"result":true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "error",
        "no-undef": "error",
        "no-unused-vars": "error",
        "no-trailing-spaces": "error",
        "newline-before-return": "error",
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
          "error",
          100,
          2,
          {"ignoreUrls": true}
        ],
        "object-curly-spacing": [
          "error",
          "always"
        ]

    }
};
