import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/minimalNumberOfSwaps/minimalNumberOfSwaps.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Minimal number of swaps", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Test 2", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Test 3", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Test 4", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Test 5", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            24
        );
    });

    test("Test 6", function() {
        let inputFile = new File(__dirname + 'input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            121
        );
    });
});
