import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/blunderEpisode1/blunderEpisode1.js';

/**
 * Tests for the "Blunder - episode 1" puzzle.
 */
suite('Blunder - episode 1', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple moves', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/01 - simple moves.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/01 - simple moves.txt');
    });

    test('Obstacles', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/02 - obstacles.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/02 - obstacles.txt');
    });

    test('Priorities', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/03 - priorities.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/03 - priorities.txt');
    });

    test('Straight line', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/04 - straight line.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/04 - straight line.txt');
    });

    test('Path modifier', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/05 - path modifier.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/05 - path modifier.txt');
    });

    test('Breaker mode', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/06 - breaker mode.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/06 - breaker mode.txt');
    });

    test('Inverter', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/07 - inverter.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/07 - inverter.txt');
    });

    test('Teleport', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/08 - teleport.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/08 - teleport.txt');
    });

    test('Broken wall?', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/09 - broken wall.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/09 - broken wall.txt');
    });

    test('All together', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/10 - all together.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/10 - all together.txt');
    });

    test('LOOP', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/11 - LOOP.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/11 - LOOP.txt');
    });

    test('Multiple loops?', function() {
        let inputFile = new File('./test/training/medium/blunderEpisode1/input/12 - multiple loops.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/medium/blunderEpisode1/output/12 - multiple loops.txt');
    });
});
