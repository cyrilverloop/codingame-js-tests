import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/shikakuSolver/shikakuSolver.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Shikaku solver", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("10x10, one solution", function() {
        let inputFile = new File(__dirname + 'input/01 - 10x10, one solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 10x10, one solution.txt');
    });

    test("15x20, more solutions", function() {
        let inputFile = new File(__dirname + 'input/02 - 15x20, more solutions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 15x20, more solutions.txt');
    });

    test("20x20", function() {
        let inputFile = new File(__dirname + 'input/03 - 20x20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 20x20.txt');
    });

    test("25x20", function() {
        let inputFile = new File(__dirname + 'input/04 - 25x20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 25x20.txt');
    });

    test("30x30", function() {
        let inputFile = new File(__dirname + 'input/05 - 30x30.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 30x30.txt');
    });
});
