import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/blunderEpisode1/blunderEpisode1.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Blunder - episode 1', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Simple moves', function() {
        let inputFile = new File(__dirname + 'input/01 - simple moves.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple moves.txt');
    });

    test('Obstacles', function() {
        let inputFile = new File(__dirname + 'input/02 - obstacles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - obstacles.txt');
    });

    test('Priorities', function() {
        let inputFile = new File(__dirname + 'input/03 - priorities.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - priorities.txt');
    });

    test('Straight line', function() {
        let inputFile = new File(__dirname + 'input/04 - straight line.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - straight line.txt');
    });

    test('Path modifier', function() {
        let inputFile = new File(__dirname + 'input/05 - path modifier.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - path modifier.txt');
    });

    test('Breaker mode', function() {
        let inputFile = new File(__dirname + 'input/06 - breaker mode.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - breaker mode.txt');
    });

    test('Inverter', function() {
        let inputFile = new File(__dirname + 'input/07 - inverter.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - inverter.txt');
    });

    test('Teleport', function() {
        let inputFile = new File(__dirname + 'input/08 - teleport.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - teleport.txt');
    });

    test('Broken wall?', function() {
        let inputFile = new File(__dirname + 'input/09 - broken wall.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - broken wall.txt');
    });

    test('All together', function() {
        let inputFile = new File(__dirname + 'input/10 - all together.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - all together.txt');
    });

    test('LOOP', function() {
        let inputFile = new File(__dirname + 'input/11 - LOOP.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - LOOP.txt');
    });

    test('Multiple loops?', function() {
        let inputFile = new File(__dirname + 'input/12 - multiple loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - multiple loops.txt');
    });
});
