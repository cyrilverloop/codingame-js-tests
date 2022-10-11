import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/numberOfLettersInANumberBinary/numberOfLettersInANumberBinary.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Number of letters in a number - Binary", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One past the example", function() {
        let inputFile = new File(__dirname + 'input/01 - one past the example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14
        );
    });

    test("Bigger start", function() {
        let inputFile = new File(__dirname + 'input/02 - bigger start.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16
        );
    });

    test("Bigger n", function() {
        let inputFile = new File(__dirname + 'input/03 - bigger n.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test("A pattern emerges", function() {
        let inputFile = new File(__dirname + 'input/04 - a pattern emerges.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test("Another pattern?", function() {
        let inputFile = new File(__dirname + 'input/05 - another pattern?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("Big numbers", function() {
        let inputFile = new File(__dirname + 'input/06 - big numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test("Bigger numbers", function() {
        let inputFile = new File(__dirname + 'input/07 - bigger numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });
});
