import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/longestIncreasingSubsequence/longestIncreasingSubsequence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Longest increasing subsequence", function() {
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
            4
        );
    });

    test("Still simple", function() {
        let inputFile = new File(__dirname + 'input/02 - still simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Medium", function() {
        let inputFile = new File(__dirname + 'input/03 - medium.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Getting harder", function() {
        let inputFile = new File(__dirname + 'input/04 - getting harder.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15
        );
    });

    test("Lots of numbers!", function() {
        let inputFile = new File(__dirname + 'input/05 - lots of numbers!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            94
        );
    });
});
