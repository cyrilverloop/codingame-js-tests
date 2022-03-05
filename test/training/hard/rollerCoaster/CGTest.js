import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/hard/rollerCoaster/rollerCoaster.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Roller coaster" puzzle.
 */
suite('Roller coaster', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple case', function() {
        let inputFile = new File(__dirname + 'input/01 - simple case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test('1000 groups of a few people', function() {
        let inputFile = new File(__dirname + 'input/02 - 1000 groups of a few people.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3935
        );
    });

    test('The same groups go on the ride several times during the day', function() {
        let inputFile = new File(__dirname + 'input/03 - the same groups go on the ride several times during the day.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15
        );
    });

    test('All the people get on the roller coaster at least once', function() {
        let inputFile = new File(__dirname + 'input/04 - all the people get on the roller coaster at least once.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15000
        );
    });

    test('High earnings during the day (> 2^32)', function() {
        let inputFile = new File(__dirname + 'input/05 - high earnings during the day.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4999975000
        );
    });

    test('Works with a large dataset', function() {
        let inputFile = new File(__dirname + 'input/06 - works with a large dataset.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            89744892565569
        );
    });
});
