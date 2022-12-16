import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/nearPalindromes/nearPalindromes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Near-palindromes", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Near-palindrome", function() {
        let inputFile = new File(__dirname + 'input/01 - near-palindrome.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Non-near-palindrome", function() {
        let inputFile = new File(__dirname + 'input/02 - non-near-palindrome.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Multiple words", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple words.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - multiple words.txt');
    });

    test("Big word", function() {
        let inputFile = new File(__dirname + 'input/04 - big word.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("River?", function() {
        let inputFile = new File(__dirname + 'input/05 - river?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - river?.txt');
    });
});
