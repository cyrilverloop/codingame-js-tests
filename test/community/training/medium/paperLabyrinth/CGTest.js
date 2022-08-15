import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/paperLabyrinth/paperLabyrinth.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Paper labyrinth", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 5"
        );
    });

    test("No one-way door, no loops", function() {
        let inputFile = new File(__dirname + 'input/02 - no one-way door, no loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10 10"
        );
    });

    test("One way door", function() {
        let inputFile = new File(__dirname + 'input/03 - one way door.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "12 8"
        );
    });

    test("House of cards", function() {
        let inputFile = new File(__dirname + 'input/04 - house of cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "18 8"
        );
    });
});
