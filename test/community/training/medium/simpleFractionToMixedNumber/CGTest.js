import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/simpleFractionToMixedNumber/simpleFractionToMixedNumber.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Simple fraction to mixed number", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Both integer and fractional parts", function() {
        let inputFile = new File(__dirname + 'input/01 - both integer and fractional parts.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - both integer and fractional parts.txt');
    });

    test("Integer part only", function() {
        let inputFile = new File(__dirname + 'input/02 - integer part only.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - integer part only.txt');
    });

    test("Fractional part only", function() {
        let inputFile = new File(__dirname + 'input/03 - fractional part only.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - fractional part only.txt');
    });

    test("Zero", function() {
        let inputFile = new File(__dirname + 'input/04 - zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - zero.txt');
    });

    test("Division by zero", function() {
        let inputFile = new File(__dirname + 'input/05 - division by zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DIVISION BY ZERO"
        );
    });

    test("Sign handling", function() {
        let inputFile = new File(__dirname + 'input/06 - sign handling.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - sign handling.txt');
    });

    test("Some more sign handling", function() {
        let inputFile = new File(__dirname + 'input/07 - some more sign handling.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - some more sign handling.txt');
    });

    test("Several random cases", function() {
        let inputFile = new File(__dirname + 'input/08 - several random cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - several random cases.txt');
    });
});
