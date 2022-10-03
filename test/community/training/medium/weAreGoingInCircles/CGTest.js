import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/weAreGoingInCircles/weAreGoingInCircles.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("We're going in circles!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A simple loop", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Not a loop", function() {
        let inputFile = new File(__dirname + 'input/02 - not a loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Still not a loop", function() {
        let inputFile = new File(__dirname + 'input/03 - still not a loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Overlapping loops", function() {
        let inputFile = new File(__dirname + 'input/04 - overlapping loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Mad face >.<", function() {
        let inputFile = new File(__dirname + 'input/05 - mad face >.<.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Wall of text", function() {
        let inputFile = new File(__dirname + 'input/06 - wall of text.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Multiple inputs", function() {
        let inputFile = new File(__dirname + 'input/07 - multiple inputs.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Gobbledygook", function() {
        let inputFile = new File(__dirname + 'input/08 - gobbledygook.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("More goobledygook", function() {
        let inputFile = new File(__dirname + 'input/09 - more goobledygook.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });
});
