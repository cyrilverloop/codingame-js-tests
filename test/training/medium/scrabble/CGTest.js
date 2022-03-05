import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/scrabble/scrabble.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Scrabble" puzzle.
 */
suite('Scrabble', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Only one word', function() {
        let inputFile = new File(__dirname + 'input/01 - only one word.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'which'
        );
    });

    test('2 words with the same value', function() {
        let inputFile = new File(__dirname + 'input/02 - 2 words with the same value.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'potsie'
        );
    });

    test('2 words with different values', function() {
        let inputFile = new File(__dirname + 'input/03 - 2 words with different values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'powers'
        );
    });

    test('Many possibilities', function() {
        let inputFile = new File(__dirname + 'input/04 - many possibilities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'waster'
        );
    });

    test('Value better than size', function() {
        let inputFile = new File(__dirname + 'input/05 - value better than size.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'tween'
        );
    });

    test('Valid word', function() {
        let inputFile = new File(__dirname + 'input/06 - valid word.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'aeiou'
        );
    });

    test('Large dictionary 1', function() {
        let inputFile = new File(__dirname + 'input/07 - large dictionary 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'satire'
        );
    });

    test('Large dictionary 2', function() {
        let inputFile = new File(__dirname + 'input/08 - large dictionary 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'pastern'
        );
    });

    test('Cannot use letter twice', function() {
        let inputFile = new File(__dirname + 'input/09 - cannot use letter twice.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'powers'
        );
    });
});
