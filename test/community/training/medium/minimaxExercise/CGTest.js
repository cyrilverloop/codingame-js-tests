import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/minimaxExercise/minimaxExercise.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Minimax exercise", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Depth 1 game", function() {
        let inputFile = new File(__dirname + 'input/01 - depth 1 game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 5"
        );
    });

    test("Depth 2, no cutoffs", function() {
        let inputFile = new File(__dirname + 'input/02 - depth 2, no cutoffs.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 7"
        );
    });

    test("Depth 2, cutoffs", function() {
        let inputFile = new File(__dirname + 'input/03 - depth 2, cutoffs.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 6"
        );
    });

    test("Small game", function() {
        let inputFile = new File(__dirname + 'input/04 - small game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 11"
        );
    });

    test("Slightly deeper game", function() {
        let inputFile = new File(__dirname + 'input/05 - slightly deeper game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-170 37"
        );
    });

    test("Random game, deep but narrow", function() {
        let inputFile = new File(__dirname + 'input/06 - random game, deep but narrow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "59 1510"
        );
    });

    test("Another large random game", function() {
        let inputFile = new File(__dirname + 'input/07 - another large random game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "78 1119"
        );
    });
});
