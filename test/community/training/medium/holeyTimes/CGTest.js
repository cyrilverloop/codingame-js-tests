import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/holeyTimes/holeyTimes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Holey times", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One missing digit in the operand", function() {
        let inputFile = new File(__dirname + 'input/01 - one missing digit in the operand.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one missing digit in the operand.txt');
    });

    test("Missing digits in the operands", function() {
        let inputFile = new File(__dirname + 'input/02 - missing digits in the operands.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - missing digits in the operands.txt');
    });

    test("Missing digits in the partial results", function() {
        let inputFile = new File(__dirname + 'input/03 - missing digits in the partial results.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - missing digits in the partial results.txt');
    });

    test("Missing digits in the result", function() {
        let inputFile = new File(__dirname + 'input/04 - missing digits in the result.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - missing digits in the result.txt');
    });

    test("Missing digits everywhere", function() {
        let inputFile = new File(__dirname + 'input/05 - missing digits everywhere.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - missing digits everywhere.txt');
    });

    test("No leading zeros", function() {
        let inputFile = new File(__dirname + 'input/06 - no leading zeros.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - no leading zeros.txt');
    });

    test("Mind the hole", function() {
        let inputFile = new File(__dirname + 'input/07 - mind the hole.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - mind the hole.txt');
    });

    test("The tough one", function() {
        let inputFile = new File(__dirname + 'input/08 - the tough one.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - the tough one.txt');
    });
});
