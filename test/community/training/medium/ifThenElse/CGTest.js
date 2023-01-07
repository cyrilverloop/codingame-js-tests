import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/ifThenElse/ifThenElse.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("If then else", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Multiple conditions", function() {
        let inputFile = new File(__dirname + 'input/01 - multiple conditions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Nested conditions", function() {
        let inputFile = new File(__dirname + 'input/02 - nested conditions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Smallest program", function() {
        let inputFile = new File(__dirname + 'input/03 - smallest program.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Optional statements", function() {
        let inputFile = new File(__dirname + 'input/04 - optional statements.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("More conditions", function() {
        let inputFile = new File(__dirname + 'input/05 - more conditions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            42
        );
    });

    test("Deeper nests", function() {
        let inputFile = new File(__dirname + 'input/06 - deeper nests.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            80
        );
    });

    test("Conditions overflow", function() {
        let inputFile = new File(__dirname + 'input/07 - conditions overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4294967296
        );
    });
});
