import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/plagueJr/plagueJr.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Plague, jr", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("The example", function() {
        let inputFile = new File(__dirname + 'input/01 - the example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Easy case", function() {
        let inputFile = new File(__dirname + 'input/02 - easy case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Advanced case", function() {
        let inputFile = new File(__dirname + 'input/03 - advanced case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("Donut case", function() {
        let inputFile = new File(__dirname + 'input/04 - donut case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            500
        );
    });

    test("Spokey case", function() {
        let inputFile = new File(__dirname + 'input/05 - spokey case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });
});
