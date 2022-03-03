import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/hard/CGXFormatter/CGXFormatter.js';

/**
 * Tests for the "CGX formatter" puzzle.
 */
suite('CGX formatter', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Boolean value with spaces and tabs', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/01 - boolean value with spaces and tabs.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test('Simple string of characters which must not be modified', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/02 - simple string of characters which must not be modified.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "' Content with spaces and	tabs'"
        );
    });

    test('Block containing a single value', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/03 - block containing a single value.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/03 - block containing a single value.txt');
    });

    test('Block containing multiple values', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/04 - block containing a multiple values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/04 - block containing a multiple values.txt');
    });

    test('Nested blocks', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/05 - nested blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/05 - nested blocks.txt');
    });

    test('Empty block', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/06 - empty block.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/06 - empty block.txt');
    });

    test('Block containing several blocks', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/07 - block containing several blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/07 - block containing several blocks.txt');
    });

    test('Key/value without blanks', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/08 - key value without blanks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/08 - key value without blanks.txt');
    });

    test('Block with several key/value', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/09 - block with several key value.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/09 - block with several key value.txt');
    });

    test('Example provided', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/10 - example provided.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/10 - example provided.txt');
    });

    test('Full example', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/11 - full example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/11 - full example.txt');
    });

    test('Numerous overlaps', function() {
        let inputFile = new File('./test/training/hard/CGXFormatter/input/12 - numerous overlaps.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/hard/CGXFormatter/output/12 - numerous overlaps.txt');
    });
});
