export class Entry {
    public date: Date;
    public message: string;

    constructor(message: string) {
        this.date = new Date();
        this.message = message;
    }
}
