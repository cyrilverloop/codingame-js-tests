import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/findTheReplacement/findTheReplacement.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Find the replacement", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy replacement", function() {
        let inputFile = new File(__dirname + 'input/01 - easy replacement.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy replacement.txt');
    });

    test("No replacement", function() {
        let inputFile = new File(__dirname + 'input/02 - no replacement.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NONE"
        );
    });

    test("CAN'T (hard)", function() {
        let inputFile = new File(__dirname + 'input/03 - CAN\'T (hard).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CAN'T"
        );
    });

    test("Symbols", function() {
        let inputFile = new File(__dirname + 'input/04 - symbols.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - symbols.txt');
    });

    test("Random, all different", function() {
        let inputFile = new File(__dirname + 'input/05 - random, all different.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - random, all different.txt');
    });

    test("Symbols reversed", function() {
        let inputFile = new File(__dirname + 'input/06 - symbols reversed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CAN'T"
        );
    });
});
