import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/levelOfNestedParentheses/levelOfNestedParentheses.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Level of nested parentheses", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Only one level", function() {
        let inputFile = new File(__dirname + 'input/01 - only one level.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - only one level.txt');
    });

    test("Two levels", function() {
        let inputFile = new File(__dirname + 'input/02 - two levels.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - two levels.txt');
    });

    test("Two levels, unbalanced", function() {
        let inputFile = new File(__dirname + 'input/03 - two levels, unbalanced.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - two levels, unbalanced.txt');
    });

    test("Lisp", function() {
        let inputFile = new File(__dirname + 'input/04 - lisp.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - lisp.txt');
    });

    test("No parenthesis", function() {
        let inputFile = new File(__dirname + 'input/05 - no parenthesis.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - no parenthesis.txt');
    });
});
