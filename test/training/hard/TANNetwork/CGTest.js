import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/hard/TANNetwork/TANNetwork.js';

/**
 * Tests for the "TAN network" puzzle.
 */
suite('TAN network', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/TANNetwork/output/01 - example.txt');
    });

    test('One single stop', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/02 - one single stop.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/TANNetwork/output/02 - one single stop.txt');
    });

    test('Same starting and end points', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/03 - same starting and end points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Bonne Garde"
        );
    });

    test('Several stages', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/04 - several stages.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/TANNetwork/output/04 - several stages.txt');
    });

    test('Large number of stages', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/05 - large number of stages.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/TANNetwork/output/05 - large number of stages.txt');
    });

    test('Route impossible', function() {
        let inputFile = new File('./test/training/hard/TANNetwork/input/06 - route impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });
});
