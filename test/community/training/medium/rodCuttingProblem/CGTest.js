import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/rodCuttingProblem/rodCuttingProblem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Rod cutting problem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example test", function() {
        let inputFile = new File(__dirname + 'input/01 - example test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Same pieces but longer rod", function() {
        let inputFile = new File(__dirname + 'input/02 - same pieces but longer rod.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            32
        );
    });

    test("More pieces", function() {
        let inputFile = new File(__dirname + 'input/03 - more pieces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            42
        );
    });

    test("Big pieces", function() {
        let inputFile = new File(__dirname + 'input/04 - big pieces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20
        );
    });

    test("Many pieces", function() {
        let inputFile = new File(__dirname + 'input/05 - many pieces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1152
        );
    });

    test("Huge rod", function() {
        let inputFile = new File(__dirname + 'input/06 - huge rod.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11538
        );
    });
});
