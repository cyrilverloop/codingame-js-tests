import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/mayanCalculation/mayanCalculation.js';

/**
 * Tests for the "Mayan calculation" puzzle.
 */
suite('Mayan calculation', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple addition', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/01 - simple addition.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/01 - simple addition.txt');
    });

    test('Addition with carry', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/02 - addition with carry.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/02 - addition with carry.txt');
    });

    test('Multiplication', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/03 - multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/03 - multiplication.txt');
    });

    test('Simple subtraction', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/04 - simple subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/04 - simple subtraction.txt');
    });

    test('Subtraction', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/05 - subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/05 - subtraction.txt');
    });

    test('Simple division', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/06 - simple division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/06 - simple division.txt');
    });

    test('Division', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/07 - division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/07 - division.txt');
    });

    test('Great multiplication', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/08 - great multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/08 - great multiplication.txt');
    });

    test('Zero', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/09 - zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/09 - zero.txt');
    });

    test('Missing power', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/10 - missing power.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/10 - missing power.txt');
    });

    test('Base 20', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/11 - base 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/11 - base 20.txt');
    });

    test('Other symbols', function() {
        let inputFile = new File('./test/training/medium/mayanCalculation/input/12 - other symbols.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/training/medium/mayanCalculation/output/12 - other symbols.txt');
    });
});
