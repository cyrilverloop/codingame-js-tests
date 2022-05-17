import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/mountainMapConvergence/mountainMapConvergence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Mountain map convergence", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Familiar", function() {
        let inputFile = new File(__dirname + 'input/01 - familiar.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - familiar.txt');
    });

    test("Wait i was correct on the last one", function() {
        let inputFile = new File(__dirname + 'input/02 - wait i was correct on the last one.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - wait i was correct on the last one.txt');
    });

    test("Twin peaks", function() {
        let inputFile = new File(__dirname + 'input/03 - twin peaks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - twin peaks.txt');
    });

    test("Negatives", function() {
        let inputFile = new File(__dirname + 'input/04 - negatives.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - negatives.txt');
    });

    test("Tricky negatives", function() {
        let inputFile = new File(__dirname + 'input/05 - tricky negatives.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - tricky negatives.txt');
    });

    test("More tricky negatives", function() {
        let inputFile = new File(__dirname + 'input/06 - more tricky negatives.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - more tricky negatives.txt');
    });

    test("Crazy mountains", function() {
        let inputFile = new File(__dirname + 'input/07 - crazy mountains.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - crazy mountains.txt');
    });
});
