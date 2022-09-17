import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/merlinsMagicSquare/merlinsMagicSquare.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Merlin's magic square", function() {
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
            6
        );
    });

    test("Test 2", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Test 3", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Test 4", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Test 5", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Test 6", function() {
        let inputFile = new File(__dirname + 'input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Test 7", function() {
        let inputFile = new File(__dirname + 'input/07 - test 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Test 8", function() {
        let inputFile = new File(__dirname + 'input/08 - test 8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Test 9", function() {
        let inputFile = new File(__dirname + 'input/09 - test 9.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Lizzo is making this too hard", function() {
        let inputFile = new File(__dirname + 'input/10 - lizzo is making this too hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("One button", function() {
        let inputFile = new File(__dirname + 'input/11 - one button.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Now you're just messing around", function() {
        let inputFile = new File(__dirname + 'input/12 - now you\'re just messing around.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Test 13", function() {
        let inputFile = new File(__dirname + 'input/13 - test 13.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Test 14", function() {
        let inputFile = new File(__dirname + 'input/14 - test 14.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Test 15", function() {
        let inputFile = new File(__dirname + 'input/15 - test 15.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Test 16", function() {
        let inputFile = new File(__dirname + 'input/16 - test 16.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Test 17", function() {
        let inputFile = new File(__dirname + 'input/17 - test 17.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Test 18", function() {
        let inputFile = new File(__dirname + 'input/18 - test 18.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Test 19", function() {
        let inputFile = new File(__dirname + 'input/19 - test 19.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Test 20", function() {
        let inputFile = new File(__dirname + 'input/20 - test 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Test 21", function() {
        let inputFile = new File(__dirname + 'input/21 - test 21.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Test 22", function() {
        let inputFile = new File(__dirname + 'input/22 - test 22.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Test 23", function() {
        let inputFile = new File(__dirname + 'input/23 - test 23.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Test 24", function() {
        let inputFile = new File(__dirname + 'input/24 - test 24.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Test 25", function() {
        let inputFile = new File(__dirname + 'input/25 - test 25.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });
});
