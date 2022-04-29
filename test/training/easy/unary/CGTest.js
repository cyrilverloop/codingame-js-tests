import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/easy/unary/unary.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Unary", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Character C", function() {
        let inputFile = new File(__dirname + 'input/01 - character C.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 0 00 0000 0 00"
        );
    });

    test("Message CC", function() {
        let inputFile = new File(__dirname + 'input/02 - message CC.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 0 00 0000 0 000 00 0000 0 00"
        );
    });

    test("Character %", function() {
        let inputFile = new File(__dirname + 'input/03 - character %.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "00 0 0 0 00 00 0 0 00 0 0 0"
        );
    });

    test("Message from Chuck Norris", function() {
        let inputFile = new File(__dirname + 'input/04 - message from Chuck Norris.txt');
        let outputFile = new File(__dirname + 'output/04 - message from Chuck Norris.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            outputFile.readline()
        );
    });
});
