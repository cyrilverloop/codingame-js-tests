import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/hoochClash/hoochClash.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hooch clash", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("This is fun!", function() {
        let inputFile = new File(__dirname + 'input/01 - this is fun!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 12"
        );
    });

    test("This is valid!", function() {
        let inputFile = new File(__dirname + 'input/02 - this is valid!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Fun enough", function() {
        let inputFile = new File(__dirname + 'input/03 - fun enough.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "11 493"
        );
    });

    test("Whee", function() {
        let inputFile = new File(__dirname + 'input/04 - whee.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "22 986"
        );
    });

    test("Higher", function() {
        let inputFile = new File(__dirname + 'input/05 - higher.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Much higher", function() {
        let inputFile = new File(__dirname + 'input/06 - much higher.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1200 2680"
        );
    });

    test("Crazy high", function() {
        let inputFile = new File(__dirname + 'input/07 - crazy high.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2719 2790"
        );
    });

    test("Stoned", function() {
        let inputFile = new File(__dirname + 'input/08 - stoned.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1290 2881"
        );
    });

    test("Overflow", function() {
        let inputFile = new File(__dirname + 'input/09 - overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Underflow", function() {
        let inputFile = new File(__dirname + 'input/10 - underflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("B&B", function() {
        let inputFile = new File(__dirname + 'input/11 - B&B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });
});
