import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/trits/trits.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Trits (balanced ternary computing)", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Addition", function() {
        let inputFile = new File(__dirname + 'input/01 - addition.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "11T"
        );
    });

    test("Subtraction", function() {
        let inputFile = new File(__dirname + 'input/02 - subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1T01"
        );
    });

    test("Multiplication", function() {
        let inputFile = new File(__dirname + 'input/03 - multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "110"
        );
    });

    test("Shift up", function() {
        let inputFile = new File(__dirname + 'input/04 - shift up.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1T00"
        );
    });

    test("Shift down", function() {
        let inputFile = new File(__dirname + 'input/05 - shift down.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1T"
        );
    });

    test("Larger addition", function() {
        let inputFile = new File(__dirname + 'input/06 - larger addition.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "11111111"
        );
    });

    test("Too much shift down", function() {
        let inputFile = new File(__dirname + 'input/07 - too much shift down.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0"
        );
    });

    test("Larger subtraction", function() {
        let inputFile = new File(__dirname + 'input/08 - larger subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1T001110"
        );
    });

    test("Larger shift up", function() {
        let inputFile = new File(__dirname + 'input/09 - larger shift up.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1T00000"
        );
    });
});
