import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/benfordsLaw/benfordsLaw.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Benford's law", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Regular account", function() {
        let inputFile = new File(__dirname + 'input/01 - regular account.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Fake account (lot's of numbers starting with 1)", function() {
        let inputFile = new File(__dirname + 'input/02 - fake account.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Fake account (equidistributed)", function() {
        let inputFile = new File(__dirname + 'input/03 - fake account (equidistributed).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Adjusted account", function() {
        let inputFile = new File(__dirname + 'input/04 - adjusted account.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Regular, less transactions", function() {
        let inputFile = new File(__dirname + 'input/05 - regular less transactions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Fake account (equidistributed) 2", function() {
        let inputFile = new File(__dirname + 'input/06 - fake account (equidistributed).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });
});
