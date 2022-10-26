import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/maximumSubSequence/maximumSubSequence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Maximum sub-sequence", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 2"
        );
    });

    test("Bigger Ik", function() {
        let inputFile = new File(__dirname + 'input/02 - bigger Ik.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "999 1000 1001 1002 1003 1004 1005"
        );
    });

    test("Two choices", function() {
        let inputFile = new File(__dirname + 'input/03 - two choices.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 2"
        );
    });

    test("Even bigger Ik", function() {
        let inputFile = new File(__dirname + 'input/04 - even bigger Ik.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - even bigger Ik.txt');
    });
});
