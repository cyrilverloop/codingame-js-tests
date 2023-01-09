import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/sourceCodeAnalyser/sourceCodeAnalyser.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Source code analyser", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Test 2: one liner", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2: one liner.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "fscanf 1"
        );
    });

    test("Test 3: simple test with multiple lines, also with _ and numbers in identifiers view", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3: simple test with multiple lines, also with _ and numbers in identifiers view.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test 3: simple test with multiple lines, also with _ and numbers in identifiers view.txt');
    });

    test("Test 4: reserved keyword is not a function call", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4: reserved keyword is not a function call.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4: reserved keyword is not a function call.txt');
    });

    test("Test 5: single line comment", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5: single line comment.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - test 5: single line comment.txt');
    });

    test("Test 6: multi-line comment", function() {
        let inputFile = new File(__dirname + 'input/06 - test 6: multi-line comment.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - test 6: multi-line comment.txt');
    });

    test("Test 7: within a comment", function() {
        let inputFile = new File(__dirname + 'input/07 - test 7: within a comment.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - test 7: within a comment.txt');
    });

    test("Test 8: string literals", function() {
        let inputFile = new File(__dirname + 'input/08 - test 8: string literals.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - test 8: string literals.txt');
    });

    test("Test 9: mixing quotes", function() {
        let inputFile = new File(__dirname + 'input/09 - test 9: mixing quotes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - test 9: mixing quotes.txt');
    });

    test("Test 10: reserved keywords", function() {
        let inputFile = new File(__dirname + 'input/10 - test 10: reserved keywords.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - test 10: reserved keywords.txt');
    });

    test("Test 11: user defined function", function() {
        let inputFile = new File(__dirname + 'input/11 - test 11: user defined function.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - test 11: user defined function.txt');
    });

    test("Test 12: no function call", function() {
        let inputFile = new File(__dirname + 'input/12 - test 12: no function call.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NONE"
        );
    });

    test("Test 13: case sensitive names", function() {
        let inputFile = new File(__dirname + 'input/13 - test 13: case sensitive names.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/13 - test 13: case sensitive names.txt');
    });

    test("Test 14: function name from variable", function() {
        let inputFile = new File(__dirname + 'input/14 - test 14: function name from variable.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "fscanf 1"
        );
    });

    test("Test 15: multiple whitespaces", function() {
        let inputFile = new File(__dirname + 'input/15 - test 15: multiple whitespaces.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/15 - test 15: multiple whitespaces.txt');
    });

    test("Test 16: real life example", function() {
        let inputFile = new File(__dirname + 'input/16 - test 16: real life example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/16 - test 16: real life example.txt');
    });
});
