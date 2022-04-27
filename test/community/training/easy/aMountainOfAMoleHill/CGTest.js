import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/aMountainOfAMoleHill/aMountainOfAMoleHill.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("A simple garden", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test example", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple garden.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("From another angle", function() {
        let inputFile = new File(__dirname + 'input/02 - from another angle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Getting crowded", function() {
        let inputFile = new File(__dirname + 'input/03 - getting crowded.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Divide and conquer", function() {
        let inputFile = new File(__dirname + 'input/04 - divide and conquer.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Bag of snakes", function() {
        let inputFile = new File(__dirname + 'input/05 - bag of snakes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("Zzzzz...", function() {
        let inputFile = new File(__dirname + 'input/06 - zzzzz....txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Include and infiltrate", function() {
        let inputFile = new File(__dirname + 'input/07 - Include and infiltrate.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20
        );
    });

    test("How did THAT happen?", function() {
        let inputFile = new File(__dirname + 'input/08 - how did THAT happen.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            74
        );
    });
});
