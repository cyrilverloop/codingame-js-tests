import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/palindromicDecomposition/palindromicDecomposition.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Palindromic decomposition", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Small a", function() {
        let inputFile = new File(__dirname + 'input/02 - small a.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Small aab", function() {
        let inputFile = new File(__dirname + 'input/03 - small aab.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Large a", function() {
        let inputFile = new File(__dirname + 'input/04 - large a.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8006001
        );
    });

    test("Large aba", function() {
        let inputFile = new File(__dirname + 'input/05 - large aba.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            890446
        );
    });

    test("Large ababa", function() {
        let inputFile = new File(__dirname + 'input/06 - large ababa.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            316412
        );
    });

    test("Large aabaa", function() {
        let inputFile = new File(__dirname + 'input/07 - large aabaa.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            319602
        );
    });

    test("Large ab", function() {
        let inputFile = new File(__dirname + 'input/08 - large ab.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5997
        );
    });

    test("Large aab", function() {
        let inputFile = new File(__dirname + 'input/09 - large aab.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3994
        );
    });

    test("Large abba", function() {
        let inputFile = new File(__dirname + 'input/10 - large abba.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            501502
        );
    });

    test("All letters", function() {
        let inputFile = new File(__dirname + 'input/11 - all letters.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });
});
