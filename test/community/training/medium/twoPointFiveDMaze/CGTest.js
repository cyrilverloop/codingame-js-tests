import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/twoPointFiveDMaze/twoPointFiveDMaze.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("2.5D maze", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple maze", function() {
        let inputFile = new File(__dirname + 'input/01 - simple maze.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("With slopes", function() {
        let inputFile = new File(__dirname + 'input/02 - with slopes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            19
        );
    });

    test("With bridges", function() {
        let inputFile = new File(__dirname + 'input/03 - with bridges.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test("Big maze", function() {
        let inputFile = new File(__dirname + 'input/04 - big maze.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            33
        );
    });
});
