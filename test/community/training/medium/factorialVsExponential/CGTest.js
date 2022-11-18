import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/factorialVsExponential/factorialVsExponential.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Factorial vs exponential", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Few small integer values", function() {
        let inputFile = new File(__dirname + 'input/01 - few small integer values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 7"
        );
    });

    test("Few small float values", function() {
        let inputFile = new File(__dirname + 'input/02 - few small float values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 14 25"
        );
    });

    test("More float values", function() {
        let inputFile = new File(__dirname + 'input/03 - more float values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "95 154 249 38 130 28 14 206 252 214"
        );
    });

    test("Bigger float values", function() {
        let inputFile = new File(__dirname + 'input/04 - bigger float values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - bigger float values.txt');
    });

    test("Huge float values", function() {
        let inputFile = new File(__dirname + 'input/05 - huge float values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - huge float values.txt');
    });
});
