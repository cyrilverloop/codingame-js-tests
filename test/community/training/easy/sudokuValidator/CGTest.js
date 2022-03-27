import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/sudokuValidator/sudokuValidator.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sudoku validator", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Basic grid", function() {
        let inputFile = new File(__dirname + 'input/01 - basic grid.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Another correct grid", function() {
        let inputFile = new File(__dirname + 'input/02 - another correct grid.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Row error", function() {
        let inputFile = new File(__dirname + 'input/03 - row error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Column error", function() {
        let inputFile = new File(__dirname + 'input/04 - column error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Subgrid error", function() {
        let inputFile = new File(__dirname + 'input/05 - subgrid error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Rubbish error", function() {
        let inputFile = new File(__dirname + 'input/06 - rubbish error.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("When summing is not enough", function() {
        let inputFile = new File(__dirname + 'input/07 - when summing is not enough.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });
});
