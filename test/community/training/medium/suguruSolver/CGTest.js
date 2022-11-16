import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/suguruSolver/suguruSolver.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Suguru solver", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("4x5", function() {
        let inputFile = new File(__dirname + 'input/01 - 4x5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 4x5.txt');
    });

    test("8x8", function() {
        let inputFile = new File(__dirname + 'input/02 - 8x8.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 8x8.txt');
    });

    test("15x10", function() {
        let inputFile = new File(__dirname + 'input/03 - 15x10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 15x10.txt');
    });

    test("20x20", function() {
        let inputFile = new File(__dirname + 'input/04 - 20x20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 20x20.txt');
    });
});
