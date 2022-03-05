import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/hard/surface/surface.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Surface" puzzle.
 */
suite('Surface', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example of the statement', function() {
        let inputFile = new File(__dirname + 'input/01 - example of the statement.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example of the statement.txt');
    });

    test('No lake', function() {
        let inputFile = new File(__dirname + 'input/02 - no lake.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('The area is a lake', function() {
        let inputFile = new File(__dirname + 'input/03 - the area is a lake.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - the area is a lake.txt');
    });

    test('1 lake on a small map', function() {
        let inputFile = new File(__dirname + 'input/04 - 1 lake on a small map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 1 lake on a small map.txt');
    });

    test('Several lakes on a small map', function() {
        let inputFile = new File(__dirname + 'input/05 - several lakes on a small map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - several lakes on a small map.txt');
    });

    test('Some lakes on a 20x20 map', function() {
        let inputFile = new File(__dirname + 'input/06 - some lakes on a 20x20 map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - some lakes on a 20x20 map.txt');
    });

    test('Many lakes on a 100x50 map', function() {
        let inputFile = new File(__dirname + 'input/07 - many lakes on a 100x50 map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - many lakes on a 100x50 map.txt');
    });

    test('100 tests on a 1000x1000 map', function() {
        let inputFile = new File(__dirname + 'input/08 - 100 tests on a 1000x1000 map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - 100 tests on a 1000x1000 map.txt');
    });

    test('Large map, large lake', function() {
        let inputFile = new File(__dirname + 'input/09 - large map, large lake.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            359997
        );
    });
});
