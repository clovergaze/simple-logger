import * as chai from 'chai';
import { SimpleLogger } from '../src';

const expect = chai.expect;

describe('Simple Logger', () => {
    let simpleLogger: SimpleLogger;

    beforeEach(() => {
        simpleLogger = new SimpleLogger();
    });

    it('should be created with an empty log', () => {
        expect(simpleLogger.getLog()).to.be.an('array').that.is.empty;
    });

    it('should add entries to the log', () => {
        const numberOfEntries = 12;

        for (let i = 0; i < numberOfEntries; i++) {
            simpleLogger.log('message' + i);
        }

        expect(simpleLogger.getLog().length).to.equal(numberOfEntries);
    });

    it('should be able to clear the log', () => {
        const numberOfEntries = 18;

        for (let i = 0; i < numberOfEntries; i++) {
            simpleLogger.log('message' + i);
        }

        expect(simpleLogger.getLog().length).to.equal(numberOfEntries);

        simpleLogger.clearLog();

        expect(simpleLogger.getLog()).to.be.an('array').that.is.empty;
    });
});
