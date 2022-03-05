import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/NGRBasicRadar/NGRBasicRadar.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "NGR basic radar" puzzle.
 */
suite('NGR basic radar', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Low Density, 1 Ticket', function() {
        let inputFile = new File(__dirname + 'input/01 - low density 1 ticket.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "FZ-792-EC 134"
        );
    });

    test('Low Density, Many Ticket', function() {
        let inputFile = new File(__dirname + 'input/02 - low density many ticket.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - low density many ticket.txt');
    });

    test('Medium Density', function() {
        let inputFile = new File(__dirname + 'input/03 - medium density.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - medium density.txt');
    });

    test('Test 4', function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4.txt');
    });
});
