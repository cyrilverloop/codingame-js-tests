import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/twoThousandFortyEightScores/twoThousandFortyEightScores.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("2048 scores", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Small game", function() {
        let inputFile = new File(__dirname + 'input/02 - small game.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small game.txt');
    });

    test("Long game", function() {
        let inputFile = new File(__dirname + 'input/03 - long game.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - long game.txt');
    });

    test("Big numbers", function() {
        let inputFile = new File(__dirname + 'input/04 - big numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - big numbers.txt');
    });

    test("Game over", function() {
        let inputFile = new File(__dirname + 'input/05 - game over.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - game over.txt');
    });

    test("Beyond 2048", function() {
        let inputFile = new File(__dirname + 'input/06 - beyond 2048.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - beyond 2048.txt');
    });

    test("No Hard Coding!", function() {
        let inputFile = new File(__dirname + 'input/07 - no hard coding!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - no hard coding!.txt');
    });
});
