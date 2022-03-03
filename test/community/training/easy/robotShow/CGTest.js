import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/robotShow/robotShow.js';

/**
 * Tests for the "Robot show" puzzle.
 */
suite('Robot show', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test('Simple', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/02 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20
        );
    });

    test('More Bots', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/03 - more bots.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            102
        );
    });

    test('Ping Pong', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/04 - ping pong.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            112
        );
    });

    test('Traffic Jam', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/05 - traffic jam.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            153
        );
    });

    test('Singular', function() {
        let inputFile = new File('./test/community/training/easy/robotShow/input/06 - singular.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });
});
