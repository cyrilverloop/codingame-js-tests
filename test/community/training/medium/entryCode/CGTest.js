import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/entryCode/entryCode.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Entry code", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small 1", function() {
        let inputFile = new File(__dirname + 'input/01 - small 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0001011100"
        );
    });

    test("Small 2", function() {
        let inputFile = new File(__dirname + 'input/02 - small 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0010211220"
        );
    });

    test("High number of digits", function() {
        let inputFile = new File(__dirname + 'input/03 - high number of digits.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - high number of digits.txt');
    });

    test("High number of characters", function() {
        let inputFile = new File(__dirname + 'input/04 - high number of characters.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - high number of characters.txt');
    });

    test("Last test", function() {
        let inputFile = new File(__dirname + 'input/05 - last test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - last test.txt');
    });
});
