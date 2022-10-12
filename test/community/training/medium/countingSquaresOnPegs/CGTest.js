import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/countingSquaresOnPegs/countingSquaresOnPegs.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Counting squares on pegs", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("5 points", function() {
        let inputFile = new File(__dirname + 'input/01 - 5 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("50 points", function() {
        let inputFile = new File(__dirname + 'input/02 - 50 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            46
        );
    });

    test("100 points", function() {
        let inputFile = new File(__dirname + 'input/03 - 100 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            198
        );
    });

    test("500 points", function() {
        let inputFile = new File(__dirname + 'input/04 - 500 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6114
        );
    });

    test("1000 points", function() {
        let inputFile = new File(__dirname + 'input/05 - 1000 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            21893
        );
    });

    test("1500 points", function() {
        let inputFile = new File(__dirname + 'input/06 - 1500 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            49330
        );
    });

    test("1750 points", function() {
        let inputFile = new File(__dirname + 'input/07 - 1750 points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            63502
        );
    });
});
