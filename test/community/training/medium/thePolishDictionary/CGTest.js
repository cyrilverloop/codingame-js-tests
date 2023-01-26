import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/thePolishDictionary/thePolishDictionary.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The polish dictionary", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple Test", function() {
        let inputFile = new File(__dirname + 'input/01 - simple test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 + 3"
        );
    });

    test("No parentheses needed", function() {
        let inputFile = new File(__dirname + 'input/02 - no parentheses needed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 + 7 * 8"
        );
    });

    test("Simple parentheses", function() {
        let inputFile = new File(__dirname + 'input/03 - simple parentheses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 - (7 + 8)"
        );
    });

    test("Multiple layers", function() {
        let inputFile = new File(__dirname + 'input/04 - multiple layers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "(5 + 3) * 10 + 8 + 4"
        );
    });

    test("Parentheses inisde other parentheses", function() {
        let inputFile = new File(__dirname + 'input/05 - parentheses inisde other parentheses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 * ((8 + 6) * (3 - 4) * 2 + 5 + 5)"
        );
    });

    test("Variables", function() {
        let inputFile = new File(__dirname + 'input/06 - variables.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "apple * (3 + x)"
        );
    });

    test("Tree divisions", function() {
        let inputFile = new File(__dirname + 'input/07 - tree divisions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "a / b / (c / d)"
        );
    });

    test("Big test", function() {
        let inputFile = new File(__dirname + 'input/08 - big test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - big test.txt');
    });
});
