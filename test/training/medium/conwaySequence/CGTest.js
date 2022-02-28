import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/conwaySequence/conwaySequence.js';

/**
 * Tests for the "Conway sequence" puzzle.
 */
suite('Conway sequence', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('R=1 and L=11', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/01 - r1 l11.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/01 - r1 l11.txt');
    });

    test('R=2 and L=1', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/02 - r2 l1.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/02 - r2 l1.txt');
    });

    test('R=5 and L=10', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/03 - r5 l10.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/03 - r5 l10.txt');
    });

    test('R=25 and L=10', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/04 - r25 l10.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/04 - r25 l10.txt');
    });

    test('R=1 and L=25', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/05 - r1 l25.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/05 - r1 l25.txt');
    });

    test('R=33 and L=25', function() {
        let inputFile = new File('./test/training/medium/conwaySequence/input/06 - r33 l25.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/conwaySequence/output/06 - r33 l25.txt');
    });
});
