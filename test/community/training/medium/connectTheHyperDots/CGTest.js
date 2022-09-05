import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/connectTheHyperDots/connectTheHyperDots.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Connect the hyper-dots", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2D", function() {
        let inputFile = new File(__dirname + 'input/01 - 2D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "flat"
        );
    });

    test("3D", function() {
        let inputFile = new File(__dirname + 'input/02 - 3D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "volume"
        );
    });

    test("4D", function() {
        let inputFile = new File(__dirname + 'input/03 - 4D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "hyper"
        );
    });

    test("Duplicate labels", function() {
        let inputFile = new File(__dirname + 'input/04 - duplicate labels.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "repeat"
        );
    });

    test("Duplicate points", function() {
        let inputFile = new File(__dirname + 'input/05 - duplicate points.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "helllllo"
        );
    });

    test("Punctuation", function() {
        let inputFile = new File(__dirname + 'input/06 - punctuation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Great!"
        );
    });

    test("Spacing", function() {
        let inputFile = new File(__dirname + 'input/07 - spacing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "unalike words"
        );
    });

    test("Quotes", function() {
        let inputFile = new File(__dirname + 'input/08 - quotes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'some "scare quote" usage'
        );
    });

    test("Hyphenation", function() {
        let inputFile = new File(__dirname + 'input/09 - hyphenation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "franken-word"
        );
    });

    test("Unordered orthants", function() {
        let inputFile = new File(__dirname + 'input/10 - unordered orthants.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "criss-cross, apple sauce"
        );
    });

    test("5D", function() {
        let inputFile = new File(__dirname + 'input/11 - 5D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Way to go! :D"
        );
    });

    test("8D", function() {
        let inputFile = new File(__dirname + 'input/12 - 8D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "This is getting crazy. >:)"
        );
    });
});
