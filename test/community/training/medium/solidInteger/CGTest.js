import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/solidInteger/solidInteger.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Solid integer", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Starting small", function() {
        let inputFile = new File(__dirname + 'input/01 - starting small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Medium test", function() {
        let inputFile = new File(__dirname + 'input/02 - medium test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            121
        );
    });

    test("100k", function() {
        let inputFile = new File(__dirname + 'input/03 - 100k.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            162151
        );
    });

    test("Smart solution", function() {
        let inputFile = new File(__dirname + 'input/04 - smart solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            23776826742147167
        );
    });

    test("Output might overflow", function() {
        let inputFile = new File(__dirname + 'input/05 - output might overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            33646585979948395414
        );
    });

    test("Single digit", function() {
        let inputFile = new File(__dirname + 'input/06 - single digit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Another small", function() {
        let inputFile = new File(__dirname + 'input/07 - another small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            98
        );
    });

    test("Another medium", function() {
        let inputFile = new File(__dirname + 'input/08 - another medium.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            919
        );
    });

    test("Another large", function() {
        let inputFile = new File(__dirname + 'input/09 - another large.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            888889
        );
    });
});
