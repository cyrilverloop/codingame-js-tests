import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/chainedMatrixProducts/chainedMatrixProducts.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Chained matrix products", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("N = 3", function() {
        let inputFile = new File(__dirname + 'input/01 - N = 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            45000
        );
    });

    test("N = 6", function() {
        let inputFile = new File(__dirname + 'input/02 - N = 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2228
        );
    });

    test("N = 20", function() {
        let inputFile = new File(__dirname + 'input/03 - N = 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12506
        );
    });

    test("N = 100", function() {
        let inputFile = new File(__dirname + 'input/04 - N = 100.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            143838
        );
    });
});
