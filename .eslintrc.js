module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "dateStuff": true
    },
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
        "no-undef": [
            "error",
            { "typeof": true }
        ],
        "jsx-quotes": [
            "error",
            "prefer-single"
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": ["error",
            80,
            2,
            { "ignoreUrls": true }
        ],
        "newline-before-return": [
            "error"
        ],
        "eqeqeq": [
            "error",
            "smart"
        ]
    }
};