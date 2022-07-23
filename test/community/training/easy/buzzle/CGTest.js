import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/buzzle/buzzle.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Buzzle", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1 - Level 1+", function() {
        let inputFile = new File(__dirname + 'input/01 - test 1 - level 1+.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - test 1 - level 1+.txt');
    });

    test("Test 2 - Level 2+", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2 - level 2+.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - test 2 - level 2+.txt');
    });

    test("Test 3 - Level 3+", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3 - level 3+.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test 3 - level 3+.txt');
    });

    test("Test 4 - Level 4", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4 - level 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4 - level 4.txt');
    });

    test("Test 5 - Level 4", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5 - level 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - test 5 - level 4.txt');
    });

    test("Everything is buzzle", function() {
        let inputFile = new File(__dirname + 'input/06 - everything is buzzle.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - everything is buzzle.txt');
    });

    test("Ternary", function() {
        let inputFile = new File(__dirname + 'input/07 - ternary.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - ternary.txt');
    });
});
