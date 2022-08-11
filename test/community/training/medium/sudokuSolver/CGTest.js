import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/sudokuSolver/sudokuSolver.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sudoku solver", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Very easy", function() {
        let inputFile = new File(__dirname + 'input/01 - very easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - very easy.txt');
    });

    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/02 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - easy.txt');
    });

    test("Intermediate/Hard", function() {
        let inputFile = new File(__dirname + 'input/03 - intermediate hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - intermediate hard.txt');
    });

    test("World's hardest sudoku", function() {
        let inputFile = new File(__dirname + 'input/04 - worlds hardest sudoku.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - worlds hardest sudoku.txt');
    });
});
