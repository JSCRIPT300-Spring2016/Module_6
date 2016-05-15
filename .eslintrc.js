module.exports = {
    "env": {
        "node": true
    },
    "extends": "eslint:recommended",
   "globals": {
        "db": true,
        "$": true    
    },
    "rules": {
        "global-require": [
            "error"
        ],
        "indent": [
            "error",
            2
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-undef": [
            "error"
        ],
        "no-unused-vars": [
            "warn"
        ],
        "eqeqeq": [
            "error"
        ],
         "quotes": [
            "error",
            "single"
        ],
        "no-console": [
            "warn"
        ],
        "comma-dangle": [
            "error"
        ],
        "max-len": [
            "error",
            80,
            2,
            {"ignoreUrls": true}
        ],
        "no-trailing-spaces": [
            "error"
        ],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "newline-before-return": [
            "error"
        ]
    }
};