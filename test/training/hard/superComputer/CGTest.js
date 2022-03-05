import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/hard/superComputer/superComputer.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Super computer" puzzle.
 */
suite('Super computer', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example 1', function() {
        let inputFile = new File(__dirname + 'input/01 - example 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test('Example 2', function() {
        let inputFile = new File(__dirname + 'input/02 - example 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('Large number of scientists', function() {
        let inputFile = new File(__dirname + 'input/03 - large number of scientists.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7879
        );
    });
});
