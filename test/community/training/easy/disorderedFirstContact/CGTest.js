import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/disorderedFirstContact/disorderedFirstContact.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Disordered first contact", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple decoding", function() {
        let inputFile = new File(__dirname + 'input/01 - simple decoding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "abcdefghi"
        );
    });

    test("Simple encoding", function() {
        let inputFile = new File(__dirname + 'input/02 - simple encoding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "worlelhlo d"
        );
    });

    test("Multiple decoding", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple decoding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "this is a mutliple encoded text"
        );
    });

    test("Multiple encoding", function() {
        let inputFile = new File(__dirname + 'input/04 - multiple encoding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "hrlellwo ods"
        );
    });

    test("Long string", function() {
        let inputFile = new File(__dirname + 'input/05 - long string.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - long string.txt');
    });
});
