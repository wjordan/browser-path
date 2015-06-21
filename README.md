browser-path
=========

[![NPM version](https://badge.fury.io/js/browser-path.svg)](http://badge.fury.io/js/browser-path)
[![david-dm-status-badge](https://david-dm.org/wjordan/browser-path.svg)](https://david-dm.org/wjordan/browser-path#info=dependencies&view=table)
[![david-dm-status-badge](https://david-dm.org/wjordan/browser-path/dev-status.svg)](https://david-dm.org/wjordan/browser-path#info=devDependencies&view=table)

browser-path is an in-browser path module that emulates the [Node JS Path API](https://nodejs.org/docs/v0.10.0/api/path.html).

### Using

```
npm install browser-path
```

### Building

Prerequisites:

* Node and NPM

Release:
```
npm install
```

The minified release build can be found in `dist/path.js`.

### Testing and development

```
npm test
```

**(NOTE: This will launch multiple web browsers!)**. You may need to change `karma.conf.js` if you do not have Firefox installed.

Use `npm start` to run tests incrementally as you develop.

### License

browser-path is licensed under the MIT License. See `LICENSE` for details.
