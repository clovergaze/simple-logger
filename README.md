# Simple Logger

A very simple Node module for logging messages with timestamps.

## Install

```bash
npm install @clovergaze/simple-logger
```

## Usage

```typescript
import { SimpleLogger } from "@clovergaze/simple-logger";

const simpleLogger: SimpleLogger = new SimpleLogger();

// Log a message
simpleLogger.log("My message..");

// Retrieve log messages
simpleLogger.getLog().forEach((entry: SimpleLogger.Entry): void => {
    console.log(entry.date + " - " + entry.message);
});

// Clear log
simpleLogger.clearLog();
```

## Development

For every development step, like continuous build mode, testing or releasing, everything has to be built first.

### Building

~~~bash
npm run build
~~~

This executes the [Grunt](https://gruntjs.com/) `build` task (via its `default` task) that lints and transpiles the
sources.

#### Continuous build mode

~~~bash
npm run watch
~~~

### Testing

~~~bash
npm test
~~~

This executes test cases inside the `./test` folder which use [Mocha](http://mochajs.org/).

### Releasing

~~~bash
npm run release
~~~

### Cleaning

~~~bash
npm run clean
~~~

This removes transpilation results but does not touch the `./dist` folder or files it contains.

## Bugs & Issues

Something is not working as intended? Please report bugs or issues on
the [corresponding GitHub page](https://github.com/clovergaze/simple-logger/issues).

## Author

Johannes Hillert ([GitHub](https://github.com/clovergaze))

## License

Copyright (c) 2017 Johannes Hillert. Licensed under the MIT license, see the included LICENSE file for details.
