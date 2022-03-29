import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/createTheLongestSequenceOf1s/createTheLongestSequenceOf1s.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Create the longest sequence of 1s", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2 bits", function() {
        let inputFile = new File(__dirname + 'input/01 - 2 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("5 bits", function() {
        let inputFile = new File(__dirname + 'input/02 - 5 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("11 bits", function() {
        let inputFile = new File(__dirname + 'input/03 - 11 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("50 bits", function() {
        let inputFile = new File(__dirname + 'input/04 - 50 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("100 bits", function() {
        let inputFile = new File(__dirname + 'input/05 - 100 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("999 bits", function() {
        let inputFile = new File(__dirname + 'input/06 - 999 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            23
        );
    });

    test("32 bits", function() {
        let inputFile = new File(__dirname + 'input/07 - 32 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("20 bits", function() {
        let inputFile = new File(__dirname + 'input/08 - 20 bits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Whole string", function() {
        let inputFile = new File(__dirname + 'input/09 - whole string.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15
        );
    });

    test("All zeros", function() {
        let inputFile = new File(__dirname + 'input/10 - all zeros.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Gaps", function() {
        let inputFile = new File(__dirname + 'input/11 - gaps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Random 100", function() {
        let inputFile = new File(__dirname + 'input/12 - random 100.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Random 32", function() {
        let inputFile = new File(__dirname + 'input/13 - random 32.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Gaps 2", function() {
        let inputFile = new File(__dirname + 'input/14 - gaps 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Steps", function() {
        let inputFile = new File(__dirname + 'input/15 - steps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12
        );
    });
});
