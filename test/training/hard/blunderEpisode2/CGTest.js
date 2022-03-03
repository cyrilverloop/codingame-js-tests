import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/hard/blunderEpisode2/blunderEpisode2.js';

/**
 * Tests for the "Blunder - episode 2" puzzle.
 */
suite('Blunder - episode 2', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('One room', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/01 - one room.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            200
        );
    });

    test('3 rooms', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/02 - 3 rooms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            40
        );
    });

    test('15 rooms, small range', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/03 - 15 rooms small range.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            88
        );
    });

    test('55 rooms', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/04 - 55 rooms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            358
        );
    });

    test('1275 rooms', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/05 - 1275 rooms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1928
        );
    });

    test('5050 rooms', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/06 - 5050 rooms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            75413
        );
    });

    test('9870 rooms', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/07 - 9870 rooms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            103558
        );
    });

    test('Square building', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/08 - square building.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            400
        );
    });

    test('Multiple entries', function() {
        let inputFile = new File('./test/training/hard/blunderEpisode2/input/09 - multiple entries.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            358
        );
    });
});
