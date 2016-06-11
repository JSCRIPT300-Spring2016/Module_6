//Emma Luk

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
            "error",
        ],
        "no-unused-vars": [
            "error",
        ],
        "strict": [
            "error",
            "global"
        ],
        "no-console": [
            "error",
        ],
        "comma-dangle": [
            "error",
            "never"
        ],
        "max-len": [
            "error",
            80, 2, { ignoreUrls: true }
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
        ],
        //// disallow trailing whitespace at the end of lines
        //"no-trailing-spaces": ["error"],

        //// enforces spacing between keys and values in object
        //"key-spacing": ["error"],

        //// disallow irregular whitespace outside of strings and comments
        //"no-irregular-whitespace": ["error"],

        //// disallow use of undefined when initializing variables
        //"no-undef-init": ["error"],

        //// disallow use of undeclared variables
        //"no-undef": ["error"],

        //// specify whether double or single quotes should be used
        //"quotes": ["error"],

        //// disallow use of console (off by default in the node environment)
        //"no-console": ["error"],

        //// disallow trailing commas in object literals
        //"no-comma-dangle": ["error"],

        //// specify the maximum length of a line in your program (off by default)
        //"max-len": [2, 80, 2, { ignoreUrls: true }],

        //////////// Best Practices //////////

        //"block-scoped-var": ["error"],      // treat var statements as if they were block scoped (off by default)
        //"complexity": ["error"],            // specify the maximum cyclomatic complexity allowed in a program (off by default)
        //"consistent-return": ["error"],     // require return statements to either always or never specify values
        //"curly": ["error"],                 // specify curly brace conventions for all control statements
        //"default-case": ["error"],          // require default case in switch statements (off by default)
        //"dot-notation": ["error"],          // encourages use of dot notation whenever possible
        //"eqeqeq": ["error"],                // require the use of === and !==
        //"guard-for-in": ["error"],          // make sure for-in loops have an if statement (off by default)
        //"no-alert": ["error"],              // disallow the use of alert, confirm, and prompt
        //"no-caller": ["error"],             // disallow use of arguments.caller or arguments.callee
        //"no-div-regex": ["error"],          // disallow division operators explicitly at beginning of regular expression (off by default)
        //"no-else-return": ["error"],        // disallow else after a return in an if (off by default)
        //"no-empty-label": ["error"],        // disallow use of labels for anything other then loops and switches
        //"no-eq-null": ["error"],            // disallow comparisons to null without a type-checking operator (off by default)
        //"no-eval": ["error"],               // disallow use of eval()
        //"no-extend-native": ["error"],      // disallow adding to native types
        //"no-extra-bind": ["error"],         // disallow unnecessary function binding
        //"no-fallthrough": ["error"],        // disallow fallthrough of case statements
        //"no-floating-decimal": ["error"],   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        //"no-implied-eval": ["error"],       // disallow use of eval()-like methods
        //"no-iterator": ["error"],           // disallow usage of __iterator__ property
        //"no-labels": ["error"],             // disallow use of labeled statements
        //"no-lone-blocks": ["error"],        // disallow unnecessary nested blocks
        //"no-loop-func": ["error"],          // disallow creation of functions within loops
        //"no-multi-spaces": ["error"],       // disallow use of multiple spaces
        //"no-multi-str": ["error"],          // disallow use of multiline strings
        //"no-native-reassign": ["error"],    // disallow reassignments of native objects
        //"no-new": ["error"],                // disallow use of new operator when not part of the assignment or comparison
        //"no-new-func": ["error"],           // disallow use of new operator for Function object
        //"no-new-wrappers": ["error"],       // disallows creating new instances of String, Number, and Boolean
        //"no-octal": ["error"],              // disallow use of octal literals
        //"no-octal-escape": ["error"],       // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        //"no-process-env": ["error"],        // disallow use of process.env (off by default)
        //"no-proto": ["error"],              // disallow usage of __proto__ property
        //"no-redeclare": ["error"],          // disallow declaring the same variable more then once
        //"no-return-assign": ["error"],      // disallow use of assignment in return statement
        //"no-script-url": ["error"],         // disallow use of javascript: urls.
        //"no-self-compare": ["error"],       // disallow comparisons where both sides are exactly the same (off by default)
        //"no-sequences": ["error"],          // disallow use of comma operator
        //"no-unused-expressions": ["error"], // disallow usage of expressions in statement position
        //"no-void": ["error"],               // disallow use of void operator (off by default)
        //"no-warning-comments": ["error"],   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
        //"no-with": ["error"],               // disallow use of the with statement
        //"radix": ["error"],                 // require use of the second argument for parseInt() (off by default)
        //"vars-on-top": ["error"],           // requires to declare all vars on top of their containing scope (off by default)
        //"wrap-iife": ["error"],             // require immediate function invocation to be wrapped in parentheses (off by default)
        //"yoda": ["error"],                  // require or disallow Yoda conditions
    }
};