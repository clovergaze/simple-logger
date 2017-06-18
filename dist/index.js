"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SimpleLogger {
    constructor() {
        this.logEntries = [];
    }
    log(message) {
        this.logEntries.push(new SimpleLogger.Entry(message));
    }
    getLog() {
        return this.logEntries;
    }
    clearLog() {
        this.logEntries = [];
    }
}
exports.SimpleLogger = SimpleLogger;
(function (SimpleLogger) {
    class Entry {
        constructor(message) {
            this.date = new Date();
            this.message = message;
        }
    }
    SimpleLogger.Entry = Entry;
})(SimpleLogger = exports.SimpleLogger || (exports.SimpleLogger = {}));
