import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/funWithSetTheory/funWithSetTheory.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Fun with set theory", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("With braces", function() {
        let inputFile = new File(__dirname + 'input/01 - with braces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2 3"
        );
    });

    test("With brackets", function() {
        let inputFile = new File(__dirname + 'input/02 - with brackets.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 5 6 7 8 9"
        );
    });

    test("Simple union", function() {
        let inputFile = new File(__dirname + 'input/03 - simple union.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 2 3 4 5"
        );
    });

    test("Multiple unions", function() {
        let inputFile = new File(__dirname + 'input/04 - multiple unions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-2 -1 0 1 2 3 4 5 10"
        );
    });

    test("Simple intersection", function() {
        let inputFile = new File(__dirname + 'input/05 - simple intersection.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4"
        );
    });

    test("Multiple intersections", function() {
        let inputFile = new File(__dirname + 'input/06 - multiple intersections.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "EMPTY"
        );
    });

    test("Simple difference", function() {
        let inputFile = new File(__dirname + 'input/07 - simple difference.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 3"
        );
    });

    test("Multiple differences", function() {
        let inputFile = new File(__dirname + 'input/08 - multiple differences.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 6 7 8 10"
        );
    });

    test("Braces and brackets", function() {
        let inputFile = new File(__dirname + 'input/09 - braces and brackets.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "8 16 20 24"
        );
    });

    test("Empty set", function() {
        let inputFile = new File(__dirname + 'input/10 - empty set.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "EMPTY"
        );
    });

    test("Negative numbers", function() {
        let inputFile = new File(__dirname + 'input/11 - negative numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-5 -2 -1"
        );
    });

    test("Orientation of brackets", function() {
        let inputFile = new File(__dirname + 'input/12 - orientation of brackets.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1"
        );
    });

    test("Simple parentheses", function() {
        let inputFile = new File(__dirname + 'input/13 - simple parentheses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "40 41 46 47 48 49 50"
        );
    });

    test("Nested parentheses", function() {
        let inputFile = new File(__dirname + 'input/14 - nested parentheses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "46 47 48 49 50"
        );
    });

    test("Everything!", function() {
        let inputFile = new File(__dirname + 'input/15 - everything!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 7 8 9"
        );
    });
});
