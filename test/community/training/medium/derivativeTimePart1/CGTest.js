import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/derivativeTimePart1/derivativeTimePart1.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Derivative time !!! - part1", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy multiply", function() {
        let inputFile = new File(__dirname + 'input/01 - easy multiply.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            30
        );
    });

    test("Second derivative", function() {
        let inputFile = new File(__dirname + 'input/02 - second derivative.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8640
        );
    });

    test("Second derivative mix", function() {
        let inputFile = new File(__dirname + 'input/03 - second derivative mix.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            60
        );
    });

    test("Power with number", function() {
        let inputFile = new File(__dirname + 'input/04 - power with number.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Power with variable", function() {
        let inputFile = new File(__dirname + 'input/05 - power with variable.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("3 variables", function() {
        let inputFile = new File(__dirname + 'input/06 - 3 variables.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2561
        );
    });

    test("Fraction", function() {
        let inputFile = new File(__dirname + 'input/07 - fraction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Longer multiply", function() {
        let inputFile = new File(__dirname + 'input/08 - longer multiply.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            32
        );
    });

    test("3rd derivative", function() {
        let inputFile = new File(__dirname + 'input/09 - 3rd derivative.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16320
        );
    });

    test("Some Greek ;)", function() {
        let inputFile = new File(__dirname + 'input/10 - some Greek ;).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16320
        );
    });

    test("Maybe not xyz ;)", function() {
        let inputFile = new File(__dirname + 'input/11 - maybe not xyz ;).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16320
        );
    });

    test("Some Vars ;)))", function() {
        let inputFile = new File(__dirname + 'input/12 - some vars ;))).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16320
        );
    });

    test("Bigger constants", function() {
        let inputFile = new File(__dirname + 'input/13 - bigger constants.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            78000
        );
    });

    test("Bigger power", function() {
        let inputFile = new File(__dirname + 'input/14 - bigger power.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1047552
        );
    });

    test("Cannot find", function() {
        let inputFile = new File(__dirname + 'input/15 - cannot find.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });
});
