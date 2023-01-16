import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/killerSudokuSolver/killerSudokuSolver.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Killer sudoku solver", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/01 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy.txt');
    });

    test("Medium", function() {
        let inputFile = new File(__dirname + 'input/02 - medium.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - medium.txt');
    });

    test("Hard", function() {
        let inputFile = new File(__dirname + 'input/03 - hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - hard.txt');
    });

    test("Expert", function() {
        let inputFile = new File(__dirname + 'input/04 - expert.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - expert.txt');
    });
});
