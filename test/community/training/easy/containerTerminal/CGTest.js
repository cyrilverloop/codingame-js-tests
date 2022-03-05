import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/containerTerminal/containerTerminal.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Container terminal" puzzle.
 */
suite('Container terminal', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Easy', function() {
        let inputFile = new File(__dirname + 'input/01 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy.txt');
    });

    test('15', function() {
        let inputFile = new File(__dirname + 'input/02 - 15.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 15.txt');
    });

    test('30', function() {
        let inputFile = new File(__dirname + 'input/03 - 30.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 30.txt');
    });

    test('60', function() {
        let inputFile = new File(__dirname + 'input/04 - 60.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 60.txt');
    });

    test('Long Queue', function() {
        let inputFile = new File(__dirname + 'input/05 - long queue.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - long queue.txt');
    });
});
