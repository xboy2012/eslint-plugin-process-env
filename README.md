eslint-plugin-process-env
=========================

`process.env` specific linting rules for ESLint.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

    $ npm install eslint

If you installed `ESLint` globally, you have to install the plugin globally too. Otherwise, install it locally.

    $ npm install eslint-plugin-process-env

# Configuration

Add a `plugins` section and specify eslint-plugin-process-env as a plugin.

Then, enable all of the rules that you would like to use.

# List of provided rules
Rules are divided into categories for your convenience. All rules are off by default, unless you use one of the plugin's configurations which turn all relevant rules on.

### Stylistic Issues
These rules are purely matters of style and are quite subjective.
* [restrict-process-env](docs/rules/restrict-process-env.md): Configure whiteList & blackList for `process.env`.
* [no-computed-process-env](docs/rules/no-computed-process-env.md): Disallow computed `process.env[xxx]`.

# Contributing
Contributions are always welcome!.
