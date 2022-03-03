import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/oneBillionDWorld/oneBillionDWorld.js';

/**
 * Tests for the "1000000000D world" puzzle.
 */
suite('1000000000D world', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 1', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test('Test 2', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            17
        );
    });

    test('Test 3', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1000000000
        );
    });

    test('Test 4', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1999999395
        );
    });

    test('Test 5', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9221165894
        );
    });

    test('Test 6', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Test 7', function() {
        let inputFile = new File('./test/community/training/easy/oneBillionDWorld/input/07 - test 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -213982941
        );
    });
});
