import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/whatsSoComplexAboutMandelbrot/whatsSoComplexAboutMandelbrot.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("What's so complex about Mandelbrot?", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Real out", function() {
        let inputFile = new File(__dirname + 'input/01 - real out.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Imaginary out", function() {
        let inputFile = new File(__dirname + 'input/02 - imaginary out.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Real in", function() {
        let inputFile = new File(__dirname + 'input/03 - real in.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            45
        );
    });

    test("Imaginary in", function() {
        let inputFile = new File(__dirname + 'input/04 - imaginary in.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Complex out", function() {
        let inputFile = new File(__dirname + 'input/05 - complex out.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            124
        );
    });

    test("Complex in", function() {
        let inputFile = new File(__dirname + 'input/06 - complex in.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            124
        );
    });

    test("Check your absolute value", function() {
        let inputFile = new File(__dirname + 'input/07 - check your absolute value.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12
        );
    });
});
