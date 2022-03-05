import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/expert/musicScores/musicScores.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Music scores" puzzle.
 */
suite('Music scores', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('One quarter note between lines', function() {
        let inputFile = new File(__dirname + 'input/01 - one quarter note between lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AQ"
        );
    });

    test('One quarter note on a line', function() {
        let inputFile = new File(__dirname + 'input/02 - one quarter note on a line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BQ"
        );
    });

    test('One half note between lines', function() {
        let inputFile = new File(__dirname + 'input/03 - one half note between lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AH"
        );
    });

    test('One half note on a line', function() {
        let inputFile = new File(__dirname + 'input/04 - one half note on a line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BH"
        );
    });

    test('Only quarter notes without lower C', function() {
        let inputFile = new File(__dirname + 'input/05 - only quarter notes without lower C.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CQ CQ CQ CQ DQ EQ CQ AQ"
        );
    });

    test('Only half notes without lower C', function() {
        let inputFile = new File(__dirname + 'input/06 - only half notes without lower C.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DH EH FH AH CH EH DH"
        );
    });

    test('Scale half and quarter notes', function() {
        let inputFile = new File(__dirname + 'input/07 - scale half and quarter notes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "EQ FH GQ AH BQ CH DQ EH FQ"
        );
    });

    test('Lower C', function() {
        let inputFile = new File(__dirname + 'input/08 - lower C.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CQ CQ CQ DQ EH DH CQ EQ DQ DQ CH"
        );
    });

    test('Very close', function() {
        let inputFile = new File(__dirname + 'input/09 - very close.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BQ CH DH EH FQ GQ GQ BQ DH BQ"
        );
    });

    test('Only 1 pixel wide', function() {
        let inputFile = new File(__dirname + 'input/10 - Only 1 pixel wide.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BQ CH DH EH FQ GQ GQ BQ DH BQ BQ CH DH EH FQ GQ GQ BQ DH BQ"
        );
    });

    test('Doctor Who theme', function() {
        let inputFile = new File(__dirname + 'input/11 - doctor Who theme.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - doctor Who theme.txt');
    });

    test('Random', function() {
        let inputFile = new File(__dirname + 'input/12 - random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - random.txt');
    });
});
