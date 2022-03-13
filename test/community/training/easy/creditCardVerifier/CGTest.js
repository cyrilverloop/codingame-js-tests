import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/creditCardVerifier/creditCardVerifier.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Credit card verifier (Luhn’s algorithm)" puzzle.
 */
suite('Container terminal', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Tests', function() {
        let inputFile = new File(__dirname + 'input/01 - tests.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - tests.txt');
    });

    test('MasterCard', function() {
        let inputFile = new File(__dirname + 'input/02 - MasterCard.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - MasterCard.txt');
    });

    test('Discover', function() {
        let inputFile = new File(__dirname + 'input/03 - Discover.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - Discover.txt');
    });

    test('VISA', function() {
        let inputFile = new File(__dirname + 'input/04 - VISA.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - VISA.txt');
    });
});
