import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/balancedTernaryComputerEncode/balancedTernaryComputerEncode.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Balanced ternary computer: encode", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Short", function() {
        let inputFile = new File(__dirname + 'input/01 - short.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10T"
        );
    });

    test("Negative", function() {
        let inputFile = new File(__dirname + 'input/02 - negative.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "T110"
        );
    });

    test("Long", function() {
        let inputFile = new File(__dirname + 'input/03 - long.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "T00TT0"
        );
    });

    test("Single digit", function() {
        let inputFile = new File(__dirname + 'input/04 - single digit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0"
        );
    });
});
