import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/morelletsRandomLines/morelletsRandomLines.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Morellet’s random lines", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One line", function() {
        let inputFile = new File(__dirname + 'input/01 - one line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test("Two lines", function() {
        let inputFile = new File(__dirname + 'input/02 - two lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test("On a line", function() {
        let inputFile = new File(__dirname + 'input/03 - on a line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ON A LINE"
        );
    });

    test("Many lines", function() {
        let inputFile = new File(__dirname + 'input/04 - many lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test("Same line", function() {
        let inputFile = new File(__dirname + 'input/05 - same line.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "YES"
        );
    });

    test("Lots of lines", function() {
        let inputFile = new File(__dirname + 'input/06 - lots of lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ON A LINE"
        );
    });

    test("Lots of lines 2", function() {
        let inputFile = new File(__dirname + 'input/07 - lots of lines 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });

    test("Mind the sign", function() {
        let inputFile = new File(__dirname + 'input/08 - mind the sign.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO"
        );
    });
});
