import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/brickInTheWall/brickInTheWall.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Brick in the wall", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Three bricks", function() {
        let inputFile = new File(__dirname + 'input/01 - three bricks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6.500"
        );
    });

    test("42 bricks in the wall", function() {
        let inputFile = new File(__dirname + 'input/02 - 42 bricks in the wall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "436.150"
        );
    });

    test("Fibonacci bricks (+1)", function() {
        let inputFile = new File(__dirname + 'input/03 - fibonacci bricks (+1).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "541.450"
        );
    });

    test("Odd, even", function() {
        let inputFile = new File(__dirname + 'input/04 - odd, even.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "273.000"
        );
    });

    test("I can see over it I", function() {
        let inputFile = new File(__dirname + 'input/05 - i can see over it I.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0.000"
        );
    });

    test("I can see over it II", function() {
        let inputFile = new File(__dirname + 'input/06 - i can see over it II.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0.650"
        );
    });

    test("Test 12589", function() {
        let inputFile = new File(__dirname + 'input/07 - test 12589.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4354.350"
        );
    });

    test("Tall", function() {
        let inputFile = new File(__dirname + 'input/08 - tall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7401.550"
        );
    });

    test("A real wall", function() {
        let inputFile = new File(__dirname + 'input/09 - a real wall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "233041.250"
        );
    });
});
