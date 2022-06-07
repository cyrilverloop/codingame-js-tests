import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/theDart101/theDart101.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The dart 101", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2 players", function() {
        let inputFile = new File(__dirname + 'input/01 - 2 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hugo"
        );
    });

    test("1 winner & 1 loser", function() {
        let inputFile = new File(__dirname + 'input/02 - 1 winner & 1 loser.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Lisa"
        );
    });

    test("One missed", function() {
        let inputFile = new File(__dirname + 'input/03 - one missed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Candice"
        );
    });

    test("Two missed", function() {
        let inputFile = new File(__dirname + 'input/04 - two missed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Fred"
        );
    });

    test("Two missed consecutively", function() {
        let inputFile = new File(__dirname + 'input/05 - two missed consecutively.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Herve"
        );
    });

    test("Three missed consecutively", function() {
        let inputFile = new File(__dirname + 'input/06 - three missed consecutively.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Cecile"
        );
    });

    test("Over the score", function() {
        let inputFile = new File(__dirname + 'input/07 - over the score.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Nicolas"
        );
    });

    test("2 players and lot of shoots", function() {
        let inputFile = new File(__dirname + 'input/08 - 2 players and lot of shoots.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ludo"
        );
    });

    test("4 players", function() {
        let inputFile = new File(__dirname + 'input/09 - 4 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Patricia"
        );
    });

    test("8 players", function() {
        let inputFile = new File(__dirname + 'input/10 - 8 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "David"
        );
    });
});
