import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/theGift/theGift.js';

/**
 * Tests for the "The gift" puzzle.
 */
suite('The gift', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example 1', function() {
        let inputFile = new File('./test/training/medium/theGift/input/01 - example 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });

    test('Example 2', function() {
        let inputFile = new File('./test/training/medium/theGift/input/02 - example 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/02 - example 2.txt');
    });

    test('Example 3', function() {
        let inputFile = new File('./test/training/medium/theGift/input/03 - example 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/03 - example 3.txt');
    });

    test('Impossible', function() {
        let inputFile = new File('./test/training/medium/theGift/input/04 - impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });

    test('Sort', function() {
        let inputFile = new File('./test/training/medium/theGift/input/05 - sort.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/05 - sort.txt');
    });

    test('Budget limit', function() {
        let inputFile = new File('./test/training/medium/theGift/input/06 - budget Limit.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/06 - budget Limit.txt');
    });

    test('Several solutions budget', function() {
        let inputFile = new File('./test/training/medium/theGift/input/07 - several solutions budget.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/07 - several solutions budget.txt');
    });

    test('Several solution fast', function() {
        let inputFile = new File('./test/training/medium/theGift/input/08 - several solution fast.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/08 - several solution fast.txt');
    });

    test('Big random', function() {
        let inputFile = new File('./test/training/medium/theGift/input/09 - big random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/theGift/output/09 - big random.txt');
    });
});
