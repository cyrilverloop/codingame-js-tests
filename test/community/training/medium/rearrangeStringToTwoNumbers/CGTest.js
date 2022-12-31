import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/rearrangeStringToTwoNumbers/rearrangeStringToTwoNumbers.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Rearrange string to two numbers", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Two digits", function() {
        let inputFile = new File(__dirname + 'input/01 - two digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 7"
        );
    });

    test("Too many digits", function() {
        let inputFile = new File(__dirname + 'input/02 - too many digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 -1"
        );
    });

    test("Maximum B", function() {
        let inputFile = new File(__dirname + 'input/03 - maximum B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "400005555567778999 1000000000000000000"
        );
    });

    test("Too many 0's", function() {
        let inputFile = new File(__dirname + 'input/04 - too many 0s.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 -1"
        );
    });

    test("Maximum B with 0", function() {
        let inputFile = new File(__dirname + 'input/05 - maximum B with 0.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1000000000000000000"
        );
    });

    test("Small A maximum B", function() {
        let inputFile = new File(__dirname + 'input/06 - small A maximum B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 1000000000000000000"
        );
    });

    test("Small A big B", function() {
        let inputFile = new File(__dirname + 'input/07 - small A big B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "20 200223334577788999"
        );
    });

    test("Too many 0's", function() {
        let inputFile = new File(__dirname + 'input/08 - too many 0s - 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 -1"
        );
    });

    test("Too few digits", function() {
        let inputFile = new File(__dirname + 'input/09 - too few digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 -1"
        );
    });

    test("Too many digits", function() {
        let inputFile = new File(__dirname + 'input/10 - too many digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1 -1"
        );
    });

    test("Zero", function() {
        let inputFile = new File(__dirname + 'input/11 - zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 400004566667788899"
        );
    });

    test("Maximum", function() {
        let inputFile = new File(__dirname + 'input/12 - maximum.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1000000000000000000 1000000000000000000"
        );
    });

    test("Big with 0's", function() {
        let inputFile = new File(__dirname + 'input/13 - big with 0s.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "200000222233333345 566777777888999999"
        );
    });

    test("Big", function() {
        let inputFile = new File(__dirname + 'input/14 - big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "111112222333355566 777778888889999999"
        );
    });

    test("Internal zeros", function() {
        let inputFile = new File(__dirname + 'input/15 - internal zeros.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "100022233334444 45555555666668899"
        );
    });

    test("Small A big B", function() {
        let inputFile = new File(__dirname + 'input/16 - small A big B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 555566666667778899"
        );
    });

    test("Small A big B", function() {
        let inputFile = new File(__dirname + 'input/17 - small A big B - 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 44455566667788"
        );
    });

    test("Two digits", function() {
        let inputFile = new File(__dirname + 'input/18 - two digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9 9"
        );
    });
});
