import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/robberyOptimisation/robberyOptimisation.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Robbery optimisation", function() {
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

        assert.strictEqual(
            console.log.getCall(0).args[0],
            31
        );
    });

    test("3 houses 1", function() {
        let inputFile = new File(__dirname + 'input/02 - 3 houses 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("3 houses 2", function() {
        let inputFile = new File(__dirname + 'input/03 - 3 houses 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("9 identical houses", function() {
        let inputFile = new File(__dirname + 'input/04 - 9 identical houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            50
        );
    });

    test("1 house", function() {
        let inputFile = new File(__dirname + 'input/05 - 1 house.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Don't just alternate houses", function() {
        let inputFile = new File(__dirname + 'input/06 - don\'t just alternate houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            31
        );
    });

    test("20 houses", function() {
        let inputFile = new File(__dirname + 'input/07 - 20 houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            75
        );
    });

    test("50 Houses", function() {
        let inputFile = new File(__dirname + 'input/08 - 50 houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            916
        );
    });

    test("8 Houses", function() {
        let inputFile = new File(__dirname + 'input/09 - 8 houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            21
        );
    });

    test("75 Houses", function() {
        let inputFile = new File(__dirname + 'input/10 - 75 houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            220208697424167
        );
    });

    test("100 Houses", function() {
        let inputFile = new File(__dirname + 'input/11 - 100 houses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            291429266834646
        );
    });

    test("Debug helper", function() {
        let inputFile = new File(__dirname + 'input/12 - debug helper.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8589934592
        );
    });

    test("Negative values", function() {
        let inputFile = new File(__dirname + 'input/13 - negative values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Negative and positive", function() {
        let inputFile = new File(__dirname + 'input/14 - negative and positive.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });
});
