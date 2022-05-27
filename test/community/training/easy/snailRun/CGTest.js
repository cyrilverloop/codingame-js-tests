import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/snailRun/snailRun.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Snail run", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple run", function() {
        let inputFile = new File(__dirname + 'input/01 - simple run.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Run in progress", function() {
        let inputFile = new File(__dirname + 'input/02 - run in progress.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Only one arrives", function() {
        let inputFile = new File(__dirname + 'input/03 - only one arrives.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("In a mess", function() {
        let inputFile = new File(__dirname + 'input/04 - in a mess.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Conversely", function() {
        let inputFile = new File(__dirname + 'input/05 - conversely.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Difficult 1", function() {
        let inputFile = new File(__dirname + 'input/06 - difficult 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Difficult 2", function() {
        let inputFile = new File(__dirname + 'input/07 - difficult 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Difficult 3", function() {
        let inputFile = new File(__dirname + 'input/08 - difficult 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });
});
