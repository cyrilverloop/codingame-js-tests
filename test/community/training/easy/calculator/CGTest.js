import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/calculator/calculator.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Calculator", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A simple operation", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple operation.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - a simple operation.txt');
    });

    test("Multiplication and division", function() {
        let inputFile = new File(__dirname + 'input/02 - multiplication and division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - multiplication and division.txt');
    });

    test("Using AC", function() {
        let inputFile = new File(__dirname + 'input/03 - using AC.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - using AC.txt');
    });

    test("Change of opinion", function() {
        let inputFile = new File(__dirname + 'input/04 - change of opinion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - change of opinion.txt');
    });

    test("Many operations", function() {
        let inputFile = new File(__dirname + 'input/05 - many operations.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - many operations.txt');
    });

    test("Press equal many times", function() {
        let inputFile = new File(__dirname + 'input/06 - press equal many times.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - press equal many times.txt');
    });

    test("Long test", function() {
        let inputFile = new File(__dirname + 'input/07 - long test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - long test.txt');
    });
});
