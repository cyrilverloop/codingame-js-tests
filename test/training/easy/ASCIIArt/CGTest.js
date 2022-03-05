import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/easy/ASCIIArt/ASCIIArt.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "ASCII Art" puzzle.
 */
suite('ASCII art', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test only one letter E', function() {
        let inputFile = new File(__dirname + 'input/01 - test only one letter E.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - test only one letter E.txt');
    });

    test('Test MANHATTAN', function() {
        let inputFile = new File(__dirname + 'input/02 - test MANHATTAN.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - test MANHATTAN.txt');
    });

    test('Test ManhAtTan', function() {
        let inputFile = new File(__dirname + 'input/03 - test ManhAtTan.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test ManhAtTan.txt');
    });

    test('Test M@NH@TT@N', function() {
        let inputFile = new File(__dirname + 'input/04 - test M@NH@TT@N.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test M@NH@TT@N.txt');
    });

    test('MANHATTAN with another ASCII representation', function() {
        let inputFile = new File(__dirname + 'input/05 - MANHATTAN with another ASCII representation.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - MANHATTAN with another ASCII representation.txt');
    });

    test('Test MAN HAT TAN', function() {
        let inputFile = new File(__dirname + 'input/06 - test MAN HAT TAN.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - test MAN HAT TAN.txt');
    });
});
