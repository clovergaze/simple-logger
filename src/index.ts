import {Entry} from "./entry";

export class SimpleLogger {
    private logEntries: Entry[];

    constructor() {
        this.logEntries = [];
    }

    public log(message: string): void {
        this.logEntries.push(new Entry(message));
    }

    public getLog(): Entry[] {
        return this.logEntries;
    }

    public clearLog(): void {
        this.logEntries = [];
    }
}
