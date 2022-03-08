import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/ghostLegs/ghostLegs.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Ghost legs" puzzle.
 */
suite("Ghost legs", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple sample', function() {
        let inputFile = new File(__dirname + 'input/01 - simple sample.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple sample.txt');
    });

    test('Small sample', function() {
        let inputFile = new File(__dirname + 'input/02 - small sample.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small sample.txt');
    });

    test('6 lanes', function() {
        let inputFile = new File(__dirname + 'input/03 - 6 lanes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 6 lanes.txt');
    });

    test('8 lanes', function() {
        let inputFile = new File(__dirname + 'input/04 - 8 lanes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 8 lanes.txt');
    });

    test('10 lanes', function() {
        let inputFile = new File(__dirname + 'input/05 - 10 lanes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 10 lanes.txt');
    });

    test('Wide and wild', function() {
        let inputFile = new File(__dirname + 'input/06 - wide and wild.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - wide and wild.txt');
    });
});
