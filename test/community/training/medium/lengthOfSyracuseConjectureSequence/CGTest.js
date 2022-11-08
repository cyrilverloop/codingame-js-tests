import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/lengthOfSyracuseConjectureSequence/lengthOfSyracuseConjectureSequence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Length of syracuse conjecture sequence", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Only one range", function() {
        let inputFile = new File(__dirname + 'input/01 - only one range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9 20"
        );
    });

    test("Two ranges", function() {
        let inputFile = new File(__dirname + 'input/02 - two ranges.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - two ranges.txt');
    });

    test("Large range", function() {
        let inputFile = new File(__dirname + 'input/03 - large range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "77031 351"
        );
    });

    test("Large ranges", function() {
        let inputFile = new File(__dirname + 'input/04 - large ranges.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - large ranges.txt');
    });
});
