# NoFi [![Build Status](https://travis-ci.org/toddmotto/nofi.png)](https://travis-ci.org/toddmotto/nofi)

NoFi, for when there's no WiFi. Uses the native HTML5 API to detect if a user's internet goes offline and emits a custom `offline` event for your callbacks.

## Demo
Check out a [demo of NoFi](http://toddmotto.com/labs/nofi).

## Options
Add the NoFi script just before the closing `</body>` tag, and initialise the module:

```javascript
NoFi.init({
    eventName: 'offline',
    interval: 1000,
    exit: false
});
```

#### eventName
Type: `String` Default: `offline`

The custom event name when listening. This even is fired when the internet connection is lost.

#### interval
Type: `Integer` Default: `10000`

The interval in which the script should check to see if the connection has been lost.

#### exit
Type: `Boolean` Default: `false`

If the script should `return` from the function upon emitting the offline custom event.

## Event listening
Just listen to your custom event using `addEventListener`:

```javascript
window.addEventListener('offline', function () {
  console.log('You are offline, oops.');
});
```

## Installing with Bower
To install nofi into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/toddmotto/nofi.git
```

## Manual installation
Drop your files into your required folders, make sure you're using the files from the `dist` folder, which is the compiled production-ready code. Ensure you place the script before the closing `</body>` tag so the DOM tree is populated when the script runs.
	
```html
<body>
	<!-- html content above -->
	<script src="dist/nofi.js"></script>
</body>
```

## Scaffolding
Project files and folder structure.

```
├── dist/
│   ├── nofi.js
│   └── nofi.min.js
├── src/
│   └── nofi.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── Gruntfile.js
└── package.json
```

## License
MIT license
