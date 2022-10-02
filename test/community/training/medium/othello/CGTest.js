import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/othello/othello.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Othello", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Start", function() {
        let inputFile = new File(__dirname + 'input/01 - start.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 4"
        );
    });

    test("Nope", function() {
        let inputFile = new File(__dirname + 'input/02 - nope.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NOPE"
        );
    });

    test("Null", function() {
        let inputFile = new File(__dirname + 'input/03 - null.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NULL"
        );
    });

    test("Real game", function() {
        let inputFile = new File(__dirname + 'input/04 - real game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "14 24"
        );
    });
});
