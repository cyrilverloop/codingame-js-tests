import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/oneDSpreadsheet/oneDSpreadsheet.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("1D spreadsheet", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple dependency", function() {
        let inputFile = new File(__dirname + 'input/01 - simple dependency.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple dependency.txt');
    });

    test("Double dependency", function() {
        let inputFile = new File(__dirname + 'input/02 - double dependency.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - double dependency.txt');
    });

    test("Subtraction", function() {
        let inputFile = new File(__dirname + 'input/03 - subtraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - subtraction.txt');
    });

    test("Multiplication", function() {
        let inputFile = new File(__dirname + 'input/04 - multiplication.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - multiplication.txt');
    });

    test("No dependencies", function() {
        let inputFile = new File(__dirname + 'input/05 - no dependencies.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - no dependencies.txt');
    });

    test("Coefficients", function() {
        let inputFile = new File(__dirname + 'input/06 - coefficients.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - coefficients.txt');
    });

    test("Fibonacci", function() {
        let inputFile = new File(__dirname + 'input/07 - fibonacci.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - fibonacci.txt');
    });

    test("Backward dependency", function() {
        let inputFile = new File(__dirname + 'input/08 - backward dependency.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - backward dependency.txt');
    });

    test("Diamond dependency", function() {
        let inputFile = new File(__dirname + 'input/09 - diamond dependency.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - diamond dependency.txt');
    });

    test("Accounting is easy", function() {
        let inputFile = new File(__dirname + 'input/10 - accounting is easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - accounting is easy.txt');
    });

    test("Accounting is hard 1", function() {
        let inputFile = new File(__dirname + 'input/11 - accounting is hard 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - accounting is hard 1.txt');
    });

    test("Accounting is hard 2", function() {
        let inputFile = new File(__dirname + 'input/12 - accounting is hard 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - accounting is hard 2.txt');
    });

    test("Deep birecursion", function() {
        let inputFile = new File(__dirname + 'input/13 - deep birecursion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/13 - deep birecursion.txt');
    });
});
