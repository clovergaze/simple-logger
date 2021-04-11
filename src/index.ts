export class SimpleLogger {
    private logEntries: SimpleLogger.Entry[] = [];

    public log(message: string): void {
        this.logEntries.push(new SimpleLogger.Entry(message));
    }

    public getLog(): SimpleLogger.Entry[] {
        return this.logEntries;
    }

    public clearLog(): void {
        this.logEntries = [];
    }
}

export namespace SimpleLogger {
    export class Entry {
        public date: Date;
        public message: string;

        constructor(message: string) {
            this.date = new Date();
            this.message = message;
        }
    }
}
