export declare class SimpleLogger {
    private logEntries;
    log(message: string): void;
    getLog(): SimpleLogger.Entry[];
    clearLog(): void;
}
export declare namespace SimpleLogger {
    class Entry {
        date: Date;
        message: string;
        constructor(message: string);
    }
}
