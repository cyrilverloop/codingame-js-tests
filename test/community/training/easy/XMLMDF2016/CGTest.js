import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/XMLMDF2016/XMLMDF2016.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("XML MDF-2016", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Only one", function() {
        let inputFile = new File(__dirname + 'input/01 - only one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "a"
        );
    });

    test("Nested might lose", function() {
        let inputFile = new File(__dirname + 'input/02 - nested might lose.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "a"
        );
    });

    test("Several nested might win", function() {
        let inputFile = new File(__dirname + 'input/03 - several nested might win.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "b"
        );
    });

    test("Several deeper nested might win too", function() {
        let inputFile = new File(__dirname + 'input/04 - several deeper nested might win too.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "c"
        );
    });

    test("Only one shall win", function() {
        let inputFile = new File(__dirname + 'input/05 - only one shall win.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "c"
        );
    });

    test("Size should not matter", function() {
        let inputFile = new File(__dirname + 'input/06 - size should not matter.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "f"
        );
    });
});
