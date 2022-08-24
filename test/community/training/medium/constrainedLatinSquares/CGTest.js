import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/constrainedLatinSquares/constrainedLatinSquares.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Constrained latin squares", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("3x3 easy", function() {
        let inputFile = new File(__dirname + 'input/01 - 3x3 easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("4x4 unconstrained", function() {
        let inputFile = new File(__dirname + 'input/02 - 4x4 unconstrained.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            576
        );
    });

    test("5x5 wrong grid", function() {
        let inputFile = new File(__dirname + 'input/03 - 5x5 wrong grid.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("5x5 fundamental", function() {
        let inputFile = new File(__dirname + 'input/04 - 5x5 fundamental.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            56
        );
    });

    test("6x6", function() {
        let inputFile = new File(__dirname + 'input/05 - 6x6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10752
        );
    });

    test("7x7", function() {
        let inputFile = new File(__dirname + 'input/06 - 7x7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14388
        );
    });

    test("8x8", function() {
        let inputFile = new File(__dirname + 'input/07 - 8x8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("9x9", function() {
        let inputFile = new File(__dirname + 'input/08 - 9x9.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8896
        );
    });
});
