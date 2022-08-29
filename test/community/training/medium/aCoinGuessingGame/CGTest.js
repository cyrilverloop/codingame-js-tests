import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/aCoinGuessingGame/aCoinGuessingGame.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("A coin guessing game", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2 coins", function() {
        let inputFile = new File(__dirname + 'input/01 - 2 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 2"
        );
    });

    test("3 coins", function() {
        let inputFile = new File(__dirname + 'input/02 - 3 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 4 6"
        );
    });

    test("4 coins", function() {
        let inputFile = new File(__dirname + 'input/03 - 4 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 8 4 6"
        );
    });

    test("5 coins", function() {
        let inputFile = new File(__dirname + 'input/04 - 5 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10 4 8 2 6"
        );
    });

    test("10 coins", function() {
        let inputFile = new File(__dirname + 'input/05 - 10 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "18 16 14 12 2 10 20 8 4 6"
        );
    });

    test("25 coins", function() {
        let inputFile = new File(__dirname + 'input/06 - 25 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "16 30 26 46 12 34 36 10 22 38 24 44 8 6 20 28 50 40 4 48 42 2 18 14 32"
        );
    });

    test("50 coins", function() {
        let inputFile = new File(__dirname + 'input/07 - 50 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - 50 coins.txt');
    });

    test("100 coins", function() {
        let inputFile = new File(__dirname + 'input/08 - 100 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - 100 coins.txt');
    });

    test("150 coins", function() {
        let inputFile = new File(__dirname + 'input/09 - 150 coins.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - 150 coins.txt');
    });
});
