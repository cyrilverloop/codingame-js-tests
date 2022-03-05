import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/expert/theResistance/theResistance.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "The resistance" puzzle.
 */
suite('The resistance', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Correct detection of a letter', function() {
        let inputFile = new File(__dirname + 'input/01 - correct detection of a letter.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test('Correct detection of a word', function() {
        let inputFile = new File(__dirname + 'input/02 - correct detection of a word.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test('Simple messages', function() {
        let inputFile = new File(__dirname + 'input/03 - simple messages.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test('Long sequence, large dictionary', function() {
        let inputFile = new File(__dirname + 'input/04 - long sequence, large dictionary.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            57330892800
        );
    });

    test('Same encoding for different words', function() {
        let inputFile = new File(__dirname + 'input/05 - same encoding for different words.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            125
        );
    });

    test('Many possibilities', function() {
        let inputFile = new File(__dirname + 'input/06 - many possibilities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2971215073
        );
    });
});
