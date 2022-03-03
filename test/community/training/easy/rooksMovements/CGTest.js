import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/rooksMovements/rooksMovements.js';

/**
 * Tests for the "Rooks movements" puzzle.
 */
suite('Rooks movements', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('MOVING FREELY', function() {
        let inputFile = new File('./test/community/training/easy/rooksMovements/input/01 - MOVING FREELY.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rooksMovements/output/01 - MOVING FREELY.txt');
    });

    test('CLOSE TO THE EDGE', function() {
        let inputFile = new File('./test/community/training/easy/rooksMovements/input/02 - CLOSE TO THE EDGE.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rooksMovements/output/02 - CLOSE TO THE EDGE.txt');
    });

    test('ONLY ALLIES', function() {
        let inputFile = new File('./test/community/training/easy/rooksMovements/input/03 - ONLY ALLIES.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rooksMovements/output/03 - ONLY ALLIES.txt');
    });

    test('FOR FRODOOO', function() {
        let inputFile = new File('./test/community/training/easy/rooksMovements/input/04 - FOR FRODOOO.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rooksMovements/output/04 - FOR FRODOOO.txt');
    });
});
