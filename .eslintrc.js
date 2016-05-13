module.exports = {
    "env": {
        "browser": true
    },
    "globals": {
        "google": true,
        "result": true,
        "round": true,
        "module": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
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
            "error"
        ],
        "eqeqeq": [
            "error", 
            "smart"
        ],
        "no-unused-vars": [
            "error"
        ],
        "no-console": [
            "error"
        ],
        "comma-dangle": [
            "error", 
            "never"
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