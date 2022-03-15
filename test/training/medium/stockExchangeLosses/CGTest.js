import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/stockExchangeLosses/stockExchangeLosses.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Stock exchange losses', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('(3 2 4 2 1 5) -> -3', function() {
        let inputFile = new File(__dirname + 'input/01 - first case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -3
        );
    });

    test('Maximum Loss between the first and last values (5 3 4 2 3 1) -> -4', function() {
        let inputFile = new File(__dirname + 'input/02 - maximum loss.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -4
        );
    });

    test('Profit (1 2 4 4 5) -> 0', function() {
        let inputFile = new File(__dirname + 'input/03 - profit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Profit 2 (3 4 7 9 10) -> 0', function() {
        let inputFile = new File(__dirname + 'input/04 - profit 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test('Large dataset (n = 99999)', function() {
        let inputFile = new File(__dirname + 'input/05 - large dataset.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1073730311
        );
    });

    test('Varied (3 2 10 7 15 14)', function() {
        let inputFile = new File(__dirname + 'input/06 - varied.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -3
        );
    });
});
