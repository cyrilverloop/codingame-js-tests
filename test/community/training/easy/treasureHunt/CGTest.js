import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/treasureHunt/treasureHunt.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Treasure hunt", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small map", function() {
        let inputFile = new File(__dirname + 'input/01 - small map.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Bigger map", function() {
        let inputFile = new File(__dirname + 'input/02 - bigger map.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            18
        );
    });

    test("I want to cry", function() {
        let inputFile = new File(__dirname + 'input/03 - i want to cry.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Easy life", function() {
        let inputFile = new File(__dirname + 'input/04 - easy life.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            135
        );
    });

    test("Am I going in circles ?", function() {
        let inputFile = new File(__dirname + 'input/05 - am I going in circles ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            36
        );
    });

    test("That's a maze !", function() {
        let inputFile = new File(__dirname + 'input/06 - thats a maze !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            39
        );
    });
});
