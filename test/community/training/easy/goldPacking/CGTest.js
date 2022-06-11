import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/goldPacking/goldPacking.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Gold packing", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Perfect fit", function() {
        let inputFile = new File(__dirname + 'input/01 - perfect fit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7"
        );
    });

    test("Odd lengths", function() {
        let inputFile = new File(__dirname + 'input/02 - odd lengths.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 5 7 9 11 13"
        );
    });

    test("Prime gold", function() {
        let inputFile = new File(__dirname + 'input/03 - prime gold.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 7 13 17 19 23 29"
        );
    });

    test("Triangular numbers", function() {
        let inputFile = new File(__dirname + 'input/04 - triangular numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 6 10 21 28 45 55 66 78 91 105 120 136 153 171 190 210"
        );
    });
});
