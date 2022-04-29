import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/medium/mayanCalculation/mayanCalculation.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Mayan calculation", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple addition", function() {
        let inputFile = new File(__dirname + 'input/01 - simple addition.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple addition.txt');
    });

    test("Addition with carry", function() {
        let inputFile = new File(__dirname + 'input/02 - addition with carry.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - addition with carry.txt');
    });

    test("Multiplication", function() {
        let inputFile = new File(__dirname + 'input/03 - multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - multiplication.txt');
    });

    test("Simple subtraction", function() {
        let inputFile = new File(__dirname + 'input/04 - simple subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - simple subtraction.txt');
    });

    test("Subtraction", function() {
        let inputFile = new File(__dirname + 'input/05 - subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - subtraction.txt');
    });

    test("Simple division", function() {
        let inputFile = new File(__dirname + 'input/06 - simple division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - simple division.txt');
    });

    test("Division", function() {
        let inputFile = new File(__dirname + 'input/07 - division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - division.txt');
    });

    test("Great multiplication", function() {
        let inputFile = new File(__dirname + 'input/08 - great multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - great multiplication.txt');
    });

    test("Zero", function() {
        let inputFile = new File(__dirname + 'input/09 - zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - zero.txt');
    });

    test("Missing power", function() {
        let inputFile = new File(__dirname + 'input/10 - missing power.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - missing power.txt');
    });

    test("Base 20", function() {
        let inputFile = new File(__dirname + 'input/11 - base 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - base 20.txt');
    });

    test("Other symbols", function() {
        let inputFile = new File(__dirname + 'input/12 - other symbols.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - other symbols.txt');
    });
});
