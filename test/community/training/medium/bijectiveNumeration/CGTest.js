import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/bijectiveNumeration/bijectiveNumeration.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bijective numeration", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple parsing", function() {
        let inputFile = new File(__dirname + 'input/01 - simple parsing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "32"
        );
    });

    test("Parsing", function() {
        let inputFile = new File(__dirname + 'input/02 - parsing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "234"
        );
    });

    test("More parsing", function() {
        let inputFile = new File(__dirname + 'input/03 - more parsing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2345"
        );
    });

    test("Simple generation", function() {
        let inputFile = new File(__dirname + 'input/04 - simple generation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A"
        );
    });

    test("Generation", function() {
        let inputFile = new File(__dirname + 'input/05 - generation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A24"
        );
    });

    test("More generation", function() {
        let inputFile = new File(__dirname + 'input/06 - more generation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AA"
        );
    });

    test("Mixed test", function() {
        let inputFile = new File(__dirname + 'input/07 - mixed test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1AAA"
        );
    });

    test("Bigger test", function() {
        let inputFile = new File(__dirname + 'input/08 - bigger test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9A3A"
        );
    });

    test("Huge test", function() {
        let inputFile = new File(__dirname + 'input/09 - huge test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1344AA18A"
        );
    });
});
