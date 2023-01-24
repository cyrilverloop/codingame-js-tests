import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theUrinalProblem/theUrinalProblem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The urinal problem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small bathroom", function() {
        let inputFile = new File(__dirname + 'input/01 - small bathroom.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("School bathroom", function() {
        let inputFile = new File(__dirname + 'input/02 - school bathroom.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Sporting event", function() {
        let inputFile = new File(__dirname + 'input/03 - sporting event.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            23
        );
    });

    test("Mostly empty", function() {
        let inputFile = new File(__dirname + 'input/04 - mostly empty.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            19
        );
    });
});
