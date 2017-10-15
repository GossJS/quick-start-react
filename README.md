# Quick Start Boilerplate

Start your project in seconds!

## Features

* Next generation JS with Babel (also include class props and object rest spread).
* [Flow](https://flow.org/en/) - static type checker for JS.
* *Development* and *Production* webpack configs!
* [Hot Module Replacement](https://github.com/gaearon/react-hot-loader) - tweak React components in real time!
* [ESLint](https://eslint.org/) (Airbnb-based) - linting utility for JavaScript and JSX.


## Setup

### 1. Get the source code

Just clone this repo:
```sh
$ git clone https://github.com/kserjey/quick-start-react.git my-great-app
$ cd my-great-app
```

Remove git history and start a brand new repository:
```sh
$ rm -rf .git
$ git init
```

Also you will probably want to correct version, name and description in package.json:
```diff
 {
-  "name": "quick-start-react",
-  "version": "0.7.0",
-  "description": "Quick start with React",
+  "name": "my-great-app",
+  "version": "1.0.0",
+  "description": "My gread React app!",
   "main": "index.js",
   "scripts": {
     "start": "webpack-dev-server --open --config webpack.dev.js",

```

### 2. Install dependencies

```sh
$ npm install
```

### 3. Enjoy!

```sh
$ npm run start
```
