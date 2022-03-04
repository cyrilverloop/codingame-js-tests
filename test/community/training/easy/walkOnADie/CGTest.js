import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/walkOnADie/walkOnADie.js';

/**
 * Tests for the "Walk on a die" puzzle.
 */
suite('Walk on a die', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 1', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test('Test 2', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test('Test 3', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test('Test 4', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test('Test 5', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('Test 6', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('Test 7', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/07 - test 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test('Test 8', function() {
        let inputFile = new File('./test/community/training/easy/walkOnADie/input/08 - test 8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });
});
