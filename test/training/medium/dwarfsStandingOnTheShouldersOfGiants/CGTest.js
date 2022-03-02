import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/dwarfsStandingOnTheShouldersOfGiants/dwarfsStandingOnTheShouldersOfGiants.js';

/**
 * Tests for the "Dwarfs standing on the shoulders of giants" puzzle.
 */
suite('Dwarfs standing on the shoulders of giants', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple example', function() {
        let inputFile = new File('./test/training/medium/dwarfsStandingOnTheShouldersOfGiants/input/01 - simple example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test('Complete example', function() {
        let inputFile = new File('./test/training/medium/dwarfsStandingOnTheShouldersOfGiants/input/02 - complete example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('Several mentors', function() {
        let inputFile = new File('./test/training/medium/dwarfsStandingOnTheShouldersOfGiants/input/03 - several mentors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });
});
