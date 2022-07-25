import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/minesweeperLevelGenerator/minesweeperLevelGenerator.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Minesweeper level generator", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple level", function() {
        let inputFile = new File(__dirname + 'input/01 - simple level.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple level.txt');
    });

    test("Corner selection", function() {
        let inputFile = new File(__dirname + 'input/02 - corner selection.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - corner selection.txt');
    });

    test("Edge selection", function() {
        let inputFile = new File(__dirname + 'input/03 - edge selection.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - edge selection.txt');
    });

    test("Beginner level", function() {
        let inputFile = new File(__dirname + 'input/04 - beginner level.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - beginner level.txt');
    });

    test("Intermediate level", function() {
        let inputFile = new File(__dirname + 'input/05 - intermediate level.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - intermediate level.txt');
    });

    test("Expert level", function() {
        let inputFile = new File(__dirname + 'input/06 - expert level.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - expert level.txt');
    });
});
