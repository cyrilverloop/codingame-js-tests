import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/easy/temperatures/temperatures.js';

/**
 * Tests for the "Temperatures" puzzle.
 */
suite('Temperatures', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple test case', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/01 - simple test case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test('Only negative numbers', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/02 - only negative numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -5
        );
    });

    test('Choose the right temperature', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/03 - choose the right temperature.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('Choose the right temperature 2', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/04 - choose the right temperature 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('Complex test case', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/05 - complex test case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test('No temperature', function() {
        let inputFile = new File('./test/training/easy/temperatures/input/06 - no temperature.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });
});
