import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/whatTheBrainfuck/whatTheBrainfuck.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("What the brainfuck !", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A simple start", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple start.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABC"
        );
    });

    test("Hello World!", function() {
        let inputFile = new File(__dirname + 'input/02 - hello world!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello World!"
        );
    });

    test("Inputs multiplication", function() {
        let inputFile = new File(__dirname + 'input/03 - inputs multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "$"
        );
    });

    test("Noisy code", function() {
        let inputFile = new File(__dirname + 'input/04 - noisy code.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello World!"
        );
    });

    test("Pointer out of bounds", function() {
        let inputFile = new File(__dirname + 'input/05 - pointer out of bounds.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "POINTER OUT OF BOUNDS"
        );
    });

    test("Incorrect value", function() {
        let inputFile = new File(__dirname + 'input/06 - incorrect value.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INCORRECT VALUE"
        );
    });

    test("Syntax error", function() {
        let inputFile = new File(__dirname + 'input/07 - syntax error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "SYNTAX ERROR"
        );
    });

    test("Multiple errors", function() {
        let inputFile = new File(__dirname + 'input/08 - multiple errors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "POINTER OUT OF BOUNDS"
        );
    });
});
