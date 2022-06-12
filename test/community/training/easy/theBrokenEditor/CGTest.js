import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/theBrokenEditor/theBrokenEditor.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The broken editor", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("No mistakes", function() {
        let inputFile = new File(__dirname + 'input/01 - no mistakes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'echo "Hello World!";'
        );
    });

    test("Single mistake", function() {
        let inputFile = new File(__dirname + 'input/02 - single mistake.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Midnight takes your heart and your soul"
        );
    });

    test("Out of bounds", function() {
        let inputFile = new File(__dirname + 'input/03 - out of bounds.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "SELECT * FROM users WHERE age = 18;"
        );
    });

    test("Backspace 1", function() {
        let inputFile = new File(__dirname + 'input/04 - backspace 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'print $_=~/[9z]/i;'
        );
    });

    test("Backspace 2", function() {
        let inputFile = new File(__dirname + 'input/05 - backspace 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            ":D"
        );
    });

    test("007", function() {
        let inputFile = new File(__dirname + 'input/06 - 007.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '"Bond. James Bond." 007'
        );
    });
});
