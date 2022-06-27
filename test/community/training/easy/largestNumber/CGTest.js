import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/largestNumber/largestNumber.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Largest number", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("No change required", function() {
        let inputFile = new File(__dirname + 'input/01 - no change required.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3141
        );
    });

    test("Remove 1 digit", function() {
        let inputFile = new File(__dirname + 'input/02 - remove 1 digit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7265
        );
    });

    test("Remove 2 digits", function() {
        let inputFile = new File(__dirname + 'input/03 - remove 2 digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4890600
        );
    });

    test("No solution", function() {
        let inputFile = new File(__dirname + 'input/04 - no solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Final test", function() {
        let inputFile = new File(__dirname + 'input/05 - final test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            67537905
        );
    });
});
