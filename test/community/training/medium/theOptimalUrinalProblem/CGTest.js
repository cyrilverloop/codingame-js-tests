import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theOptimalUrinalProblem/theOptimalUrinalProblem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The optimal urinal problem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tiny toilet", function() {
        let inputFile = new File(__dirname + 'input/01 - tiny toilet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 1"
        );
    });

    test("Small toilet", function() {
        let inputFile = new File(__dirname + 'input/02 - small toilet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 1"
        );
    });

    test("Medium-sized toilet", function() {
        let inputFile = new File(__dirname + 'input/03 - medium-sized toilet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7 1"
        );
    });

    test("It's not always the first", function() {
        let inputFile = new File(__dirname + 'input/04 - It is not always the first.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4 3"
        );
    });

    test("Huge toilet", function() {
        let inputFile = new File(__dirname + 'input/05 - huge toilet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "516 8"
        );
    });

    test("Toilet island", function() {
        let inputFile = new File(__dirname + 'input/06 - toilet island.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10241 4097"
        );
    });

    test("Toilet world", function() {
        let inputFile = new File(__dirname + 'input/07 - toilet world.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "64711 1"
        );
    });

    test("Toilet universe", function() {
        let inputFile = new File(__dirname + 'input/08 - toilet universe.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "655361 262145"
        );
    });
});
