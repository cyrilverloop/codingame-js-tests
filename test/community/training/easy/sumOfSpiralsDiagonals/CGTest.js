import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/sumOfSpiralsDiagonals/sumOfSpiralsDiagonals.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sum of spiral's diagonals", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Odd spiral', function() {
        let inputFile = new File(__dirname + 'input/01 - odd spiral.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            133
        );
    });

    test('Even spiral', function() {
        let inputFile = new File(__dirname + 'input/02 - even spiral.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            61584
        );
    });

    test('Bigger spiral', function() {
        let inputFile = new File(__dirname + 'input/03 - bigger spiral.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            270890816
        );
    });

    test('Milky spiral', function() {
        let inputFile = new File(__dirname + 'input/04 - milky spiral.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4086949725
        );
    });
});
