import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/howTimeFlies/howTimeFlies.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Full years", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Full years", function() {
        let inputFile = new File(__dirname + 'input/01 - full years.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "16 years, total 5844 days"
        );
    });

    test("Full months", function() {
        let inputFile = new File(__dirname + 'input/02 - full months.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7 months, total 213 days"
        );
    });

    test("Years and months", function() {
        let inputFile = new File(__dirname + 'input/03 - years and months.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 year, 3 months, total 458 days"
        );
    });

    test("Days only", function() {
        let inputFile = new File(__dirname + 'input/04 - days only.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "total 30 days"
        );
    });

    test("Same date", function() {
        let inputFile = new File(__dirname + 'input/05 - same date.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "total 0 days"
        );
    });

    test("Complex", function() {
        let inputFile = new File(__dirname + 'input/06 - complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 years, 1 month, total 1140 days"
        );
    });

    test("One month", function() {
        let inputFile = new File(__dirname + 'input/07 - one month.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 month, total 31 days"
        );
    });

    test("One year", function() {
        let inputFile = new File(__dirname + 'input/08 - one year.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 year, total 365 days"
        );
    });

    test("Leap year", function() {
        let inputFile = new File(__dirname + 'input/09 - leap year.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 year, total 366 days"
        );
    });
});
