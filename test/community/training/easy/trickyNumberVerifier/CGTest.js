import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/trickyNumberVerifier/trickyNumberVerifier.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Tricky number verifier", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Valid numbers", function() {
        let inputFile = new File(__dirname + 'input/01 - valid numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - valid numbers.txt');
    });

    test("Syntax errors", function() {
        let inputFile = new File(__dirname + 'input/02 - syntax errors.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - syntax errors.txt');
    });

    test("Invalid dates", function() {
        let inputFile = new File(__dirname + 'input/03 - invalid dates.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - invalid dates.txt');
    });

    test("29th February", function() {
        let inputFile = new File(__dirname + 'input/04 - 29th february.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 29th february.txt');
    });

    test("10 consecutive numbers", function() {
        let inputFile = new File(__dirname + 'input/05 - 10 consecutive numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 10 consecutive numbers.txt');
    });

    test("Rejected identifier", function() {
        let inputFile = new File(__dirname + 'input/06 - rejected identifier.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - rejected identifier.txt');
    });
});
