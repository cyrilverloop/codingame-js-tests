import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/offsetArrays/offsetArrays.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Offset arrays", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Negative indexing", function() {
        let inputFile = new File(__dirname + 'input/02 - negative indexing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            22
        );
    });

    test("Nested", function() {
        let inputFile = new File(__dirname + 'input/03 - nested.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("One-based", function() {
        let inputFile = new File(__dirname + 'input/04 - one-based.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -69
        );
    });

    test("Only one element", function() {
        let inputFile = new File(__dirname + 'input/05 - only one element.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1547
        );
    });

    test("Big Offsets #1", function() {
        let inputFile = new File(__dirname + 'input/06 - big offsets #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            506
        );
    });

    test("Big Offsets #2", function() {
        let inputFile = new File(__dirname + 'input/07 - big offsets #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            24184051
        );
    });

    test("Deep nesting", function() {
        let inputFile = new File(__dirname + 'input/08 - deep nesting.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            28
        );
    });

    test("Complicated #1", function() {
        let inputFile = new File(__dirname + 'input/09 - complicated #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -2
        );
    });

    test("Complicated #2", function() {
        let inputFile = new File(__dirname + 'input/10 - complicated #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            400
        );
    });
});
