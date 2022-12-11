import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/smoothFactory/smoothFactory.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Smooth factory", function() {
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
            15
        );
    });

    test("Reading comprehension", function() {
        let inputFile = new File(__dirname + 'input/02 - reading comprehension.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            48
        );
    });

    test("Medium figures", function() {
        let inputFile = new File(__dirname + 'input/03 - medium figures.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2048552
        );
    });

    test("Large figures", function() {
        let inputFile = new File(__dirname + 'input/04 - large figures.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6398507456756325
        );
    });
});
