import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/rectanglePartition/rectanglePartition.js';

/**
 * Tests for the "Rectangle partition" puzzle.
 */
suite('Rectangle partition', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Sample', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/01 - sample.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('Squarish', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/02 - squarish.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14
        );
    });

    test('Bigger 1', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/03 - bigger 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            123
        );
    });

    test('Bigger 2', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/04 - bigger 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            36
        );
    });

    test('Lo-density 1', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/05 - lo-density 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            25
        );
    });

    test('Lo-density 2', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/06 - lo-density 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Hi-density 1', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/07 - hi-density 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            22281
        );
    });

    test('Hi-density 2', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/08 - hi-density 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18431
        );
    });

    test('Imbalance', function() {
        let inputFile = new File('./test/community/training/easy/rectanglePartition/input/09 - imbalance.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            42
        );
    });
});
