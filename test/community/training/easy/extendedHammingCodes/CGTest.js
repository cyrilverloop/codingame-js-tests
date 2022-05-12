import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/extendedHammingCodes/extendedHammingCodes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Extended hamming codes", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Single bit flipped", function() {
        let inputFile = new File(__dirname + 'input/01 - single bit flipped.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1100101011110110"
        );
    });

    test("Parity bit flipped", function() {
        let inputFile = new File(__dirname + 'input/02 - parity bit flipped.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0001011100101011"
        );
    });

    test("Two errors", function() {
        let inputFile = new File(__dirname + 'input/03 - two errors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TWO ERRORS"
        );
    });

    test("No error", function() {
        let inputFile = new File(__dirname + 'input/04 - no error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1001101000000011"
        );
    });
});
