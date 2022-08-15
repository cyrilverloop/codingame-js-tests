import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/LTriominoes/LTriominoes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("L-triominoes", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1 : 2x2", function() {
        let inputFile = new File(__dirname + 'input/01 - test 1 : 2x2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - test 1 : 2x2.txt');
    });

    test("Test 2 : 4x4", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2 : 4x4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - test 2 : 4x4.txt');
    });

    test("Test 3 : 8x8", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3 : 8x8.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test 3 : 8x8.txt');
    });

    test("Test 4 : 8x8", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4 : 8x8.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4 : 8x8.txt');
    });
});
