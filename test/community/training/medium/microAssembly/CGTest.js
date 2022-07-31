import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/microAssembly/microAssembly.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Micro assembly", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("MOV test", function() {
        let inputFile = new File(__dirname + 'input/01 - MOV test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 3 1 -4"
        );
    });

    test("ADD test", function() {
        let inputFile = new File(__dirname + 'input/02 - ADD test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 9 13 5"
        );
    });

    test("SUB test", function() {
        let inputFile = new File(__dirname + 'input/03 - SUB test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 12 21 12"
        );
    });

    test("JNE test", function() {
        let inputFile = new File(__dirname + 'input/04 - JNE test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 0 7 9"
        );
    });

    test("Handling negative values", function() {
        let inputFile = new File(__dirname + 'input/05 - handling negative values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 0 -3 -10"
        );
    });

    test("Calculating sum of 1..N", function() {
        let inputFile = new File(__dirname + 'input/06 - calculating sum of 1_N.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "55 0 0 0"
        );
    });

    test("Nested loops", function() {
        let inputFile = new File(__dirname + 'input/07 - nested loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "30 0 0 -7"
        );
    });

    test("Multiplication and jump over instruction", function() {
        let inputFile = new File(__dirname + 'input/08 - multiplication and jump over instruction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "105 0 0 0"
        );
    });
});
