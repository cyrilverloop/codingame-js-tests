import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/mondayTuesdayHappyDays/mondayTuesdayHappyDays.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Monday tuesday happy days", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tomorrow", function() {
        let inputFile = new File(__dirname + 'input/01 - tomorrow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Tuesday"
        );
    });

    test("Sometime next month", function() {
        let inputFile = new File(__dirname + 'input/02 - sometime next month.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Sunday"
        );
    });

    test("Sometime next month, leap year", function() {
        let inputFile = new File(__dirname + 'input/03 - sometime next month, leap year.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Monday"
        );
    });

    test("When was that again?", function() {
        let inputFile = new File(__dirname + 'input/04 - when was that again?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Wednesday"
        );
    });

    test("Future", function() {
        let inputFile = new File(__dirname + 'input/05 - future.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Friday"
        );
    });
});
