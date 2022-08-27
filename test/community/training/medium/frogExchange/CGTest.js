import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/frogExchange/frogExchange.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Frog exchange", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("n=3 m starts left", function() {
        let inputFile = new File(__dirname + 'input/01 - n=3 m starts left.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - n=3 m starts left.txt');
    });

    test("n=5 m starts left", function() {
        let inputFile = new File(__dirname + 'input/02 - n=5 m starts left.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - n=5 m starts left.txt');
    });

    test("n=11 m starts left", function() {
        let inputFile = new File(__dirname + 'input/03 - n=11 m starts left.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - n=11 m starts left.txt');
    });

    test("No frog one stone", function() {
        let inputFile = new File(__dirname + 'input/04 - no frog one stone.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "s"
        );
    });
});
