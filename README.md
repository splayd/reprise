# reprise
![npm](https://img.shields.io/npm/v/reprise.svg)
[![Build Status](https://travis-ci.org/splayd/reprise.svg?branch=master)](https://travis-ci.org/splayd/reprise)
[![dependencies Status](https://david-dm.org/splayd/reprise/status.svg)](https://david-dm.org/splayd/reprise)
[![devDependencies Status](https://david-dm.org/splayd/reprise/dev-status.svg)](https://david-dm.org/splayd/reprise?type=dev)

Automatic hot-reloading for Babel-compiled Node.js processes

## Usage
```sh
yarn reprise server.js
```

`reprise` will re-compile and re-import the given file when:

- The given file changes
- Any recursive dependency of the given file changes
- `package.json` changes

`reprise` uses Babel, via `babel-register`, to compile on import.
Project-specific Babel configuration (`package.json`, `.babelrc`, `.babelrc.js`)
is respected, defaulting to `@babel/env` if none exists.

## Installation

### Supported Versions of Node.js
`reprise` is only tested against the latest `Current` and `LTS` versions of
[Node.js](https://nodejs.org/en/).

Please ensure that your Node.js installation is up-to-date, and, if necessary,
[upgrade your installation](https://nodejs.org/en/download/package-manager/).

### npm Package
Install [reprise](https://yarnpkg.com/en/package/reprise)
by running

```sh
yarn add reprise
```

Or, if [`yarn`](https://yarnpkg.com/en/) is not installed, run

```sh
npm install --save reprise
```
