import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/prefixCode/prefixCode.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Prefix code", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("abracadabra", function() {
        let inputFile = new File(__dirname + 'input/01 - abracadabra.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "abracadabra"
        );
    });

    test("Hello World !", function() {
        let inputFile = new File(__dirname + 'input/02 - hello world !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello World !"
        );
    });

    test("Extra bit at the end", function() {
        let inputFile = new File(__dirname + 'input/03 - extra bit at the end.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DECODE FAIL AT INDEX 186"
        );
    });

    test("Missing first character", function() {
        let inputFile = new File(__dirname + 'input/04 - missing first character.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DECODE FAIL AT INDEX 0"
        );
    });

    test("Inception", function() {
        let inputFile = new File(__dirname + 'input/05 - inception.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - inception.txt');
    });

    test("Poor table", function() {
        let inputFile = new File(__dirname + 'input/06 - poor table.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A very poor table, anyway, your program should work !"
        );
    });

    test("No table !", function() {
        let inputFile = new File(__dirname + 'input/07 - no table !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DECODE FAIL AT INDEX 0"
        );
    });

    test("Lonely character", function() {
        let inputFile = new File(__dirname + 'input/08 - lonely character.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "zzzzzzzzzzzzzzz"
        );
    });

    test("ASCII art", function() {
        let inputFile = new File(__dirname + 'input/09 - ASCII art.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - ASCII art.txt');
    });

    test("Lorem ipsum", function() {
        let inputFile = new File(__dirname + 'input/10 - lorem ipsum.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - lorem ipsum.txt');
    });

    test("Parallel or not ?", function() {
        let inputFile = new File(__dirname + 'input/11 - parallel or not ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - parallel or not ?.txt');
    });

    test("Lonely character v2", function() {
        let inputFile = new File(__dirname + 'input/12 - lonely character v2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1"
        );
    });
});
