import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/objectInsertion/objectInsertion.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Object Insertion", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("No solution", function() {
        let inputFile = new File(__dirname + 'input/02 - no solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Multiple solutions", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple solutions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("No place for dot", function() {
        let inputFile = new File(__dirname + 'input/04 - no place for dot.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Empty smallest grid", function() {
        let inputFile = new File(__dirname + 'input/05 - empty smallest grid.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - empty smallest grid.txt');
    });

    test("Fragmented object", function() {
        let inputFile = new File(__dirname + 'input/06 - fragmented object.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - fragmented object.txt');
    });

    test("Lot of solutions", function() {
        let inputFile = new File(__dirname + 'input/07 - lot of solutions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            42
        );
    });
});
