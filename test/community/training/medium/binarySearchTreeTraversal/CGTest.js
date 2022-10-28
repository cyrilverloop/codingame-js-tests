import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/binarySearchTreeTraversal/binarySearchTreeTraversal.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Binary search tree traversal", function() {
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

    test("Positive values only", function() {
        let inputFile = new File(__dirname + 'input/02 - positive values only.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - positive values only.txt');
    });

    test("Small random values", function() {
        let inputFile = new File(__dirname + 'input/03 - small random values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - small random values.txt');
    });

    test("Large random values", function() {
        let inputFile = new File(__dirname + 'input/04 - large random values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - large random values.txt');
    });

    test("More random values", function() {
        let inputFile = new File(__dirname + 'input/05 - more random values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - more random values.txt');
    });

    test("Ordered values", function() {
        let inputFile = new File(__dirname + 'input/06 - ordered values.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - ordered values.txt');
    });
});
