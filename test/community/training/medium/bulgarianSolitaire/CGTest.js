import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/bulgarianSolitaire/bulgarianSolitaire.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bulgarian solitaire", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1 pile", function() {
        let inputFile = new File(__dirname + 'input/01 - 1 pile.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("3 piles", function() {
        let inputFile = new File(__dirname + 'input/02 - 3 piles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Large piles", function() {
        let inputFile = new File(__dirname + 'input/03 - large piles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            62
        );
    });

    test("Empty piles", function() {
        let inputFile = new File(__dirname + 'input/04 - empty piles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Many piles", function() {
        let inputFile = new File(__dirname + 'input/05 - many piles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            82
        );
    });
});
