module.exports = {
    "env": {
        "browser": true,
		"node": true
    },
    "rules": {
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
            "error"
        ],
		"eqeqeq": [
		    "error"
		],
        "quotes": [
            "error",
            "single"
        ],
		"no-console": [
		    "error"
		],
		"comma-style": [
		    "error", 
			"last"
		],
		"max-len": [
		    "error",
			200,
			2,
			{ "ignoreUrls": true }
		],
		"no-trailing-spaces": [
		    "error",
			{ "skipBlankLines": true }
		],
		"object-curly-spacing": [
		    "error",
			"always"
		],
		"newline-before-return": [
		    "error"
		],
		"linebreak-style": [
            "error",
            "windows"
        ]
    }
};