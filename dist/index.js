"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entry_1 = require("./entry");
class SimpleLogger {
    constructor() {
        this.logEntries = [];
    }
    log(message) {
        this.logEntries.push(new entry_1.Entry(message));
    }
    getLog() {
        return this.logEntries;
    }
    clearLog() {
        this.logEntries = [];
    }
}
exports.SimpleLogger = SimpleLogger;
