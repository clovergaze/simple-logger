# Simple Logger

A very simple Node module for logging a message with a timestamp.

## Install

~~~bash
npm install @clovergaze/simple-logger
~~~

## Usage

~~~typescript
import {SimpleLogger} from "@clovergaze/simple-logger";

const simpleLogger: SimpleLogger = new SimpleLogger();

// Log a message
simpleLogger.log("My log message");

// Retrieve log messages
simpleLogger.getLog().forEach((entry) => {
    console.log(entry.date + " - " + entry.message);
});

// Clear log
simpleLogger.clearLog();
~~~

## Development
For every development step, like the continuous build mode, testing and releasing, things have to be built first.

### Building

~~~bash
npm run build
~~~

This executes the [Grunt](https://gruntjs.com/) _build_ task (via its _default_ task), that lints and transpiles the
sources.

#### Continuous build mode

~~~bash
npm run watch
~~~

### Testing

~~~bash
npm test
~~~

This executes test cases inside the _'./test'_ folder using [Mocha](http://mochajs.org/).

### Releasing

~~~bash
npm run release
~~~

### Cleaning

~~~bash
npm run clean
~~~

Removes transpilation results and map files, but does not touch released files inside the _'./dist'_ folder.

## Bugs & Issues

If there are any problems with this module or you find any bugs, then please feel free to create a new issue on the
[corresponding GitHub page](https://github.com/clovergaze/simple-logger/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.