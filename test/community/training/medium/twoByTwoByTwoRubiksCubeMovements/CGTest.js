import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/twoByTwoByTwoRubiksCubeMovements/twoByTwoByTwoRubiksCubeMovements.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("2×2×2 rubik’s cube movements", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple move", function() {
        let inputFile = new File(__dirname + 'input/01 - simple move.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple move.txt');
    });

    test("Reverse move", function() {
        let inputFile = new File(__dirname + 'input/02 - reverse move.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - reverse move.txt');
    });

    test("Square move", function() {
        let inputFile = new File(__dirname + 'input/03 - square move.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - square move.txt');
    });

    test("Classical algorithms", function() {
        let inputFile = new File(__dirname + 'input/04 - classical algorithms.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - classical algorithms.txt');
    });
});
