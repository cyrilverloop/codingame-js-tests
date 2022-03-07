import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/jackSilverTheCasino/jackSilverTheCasino.js';

const __dirname = new URL('.', import.meta.url).pathname;

/**
 * Tests for the "Jack Silver: the casino" puzzle.
 */
suite('Jack Silver: the casino', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Target #1', function() {
        let inputFile = new File(__dirname + 'input/01 - target 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1153
        );
    });

    test('Target #3', function() {
        let inputFile = new File(__dirname + 'input/02 - target 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Target #5', function() {
        let inputFile = new File(__dirname + 'input/03 - target 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test('0 is not EVEN', function() {
        let inputFile = new File(__dirname + 'input/04 - 0 is not EVEN.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            359412
        );
    });
});
