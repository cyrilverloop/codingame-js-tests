import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/futoshikiSolver/futoshikiSolver.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Futoshiki solver", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("No comparisons", function() {
        let inputFile = new File(__dirname + 'input/01 - no comparisons.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - no comparisons.txt');
    });

    test("Comparisons only horizontal", function() {
        let inputFile = new File(__dirname + 'input/02 - comparisons only horizontal.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - comparisons only horizontal.txt');
    });

    test("Comparisons only vertical", function() {
        let inputFile = new File(__dirname + 'input/03 - comparisons only vertical.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - comparisons only vertical.txt');
    });

    test("5x5", function() {
        let inputFile = new File(__dirname + 'input/04 - 5x5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 5x5.txt');
    });

    test("7x7", function() {
        let inputFile = new File(__dirname + 'input/05 - 7x7.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 7x7.txt');
    });

    test("More 5x5", function() {
        let inputFile = new File(__dirname + 'input/06 - more 5x5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - more 5x5.txt');
    });

    test("4x4", function() {
        let inputFile = new File(__dirname + 'input/07 - 4x4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - 4x4.txt');
    });

    test("6x6", function() {
        let inputFile = new File(__dirname + 'input/08 - 6x6.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - 6x6.txt');
    });

    test("More 6x6", function() {
        let inputFile = new File(__dirname + 'input/09 - more 6x6.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - more 6x6.txt');
    });

    test("3x3", function() {
        let inputFile = new File(__dirname + 'input/10 - 3x3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - 3x3.txt');
    });

    test("1x1", function() {
        let inputFile = new File(__dirname + 'input/11 - 1x1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });
});
