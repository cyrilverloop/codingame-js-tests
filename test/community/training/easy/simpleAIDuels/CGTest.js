import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/simpleAIDuels/simpleAIDuels.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Simple AI duels", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Nice guys", function() {
        let inputFile = new File(__dirname + 'input/01 - nice guys.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DRAW"
        );
    });

    test("No more Mr nice guy", function() {
        let inputFile = new File(__dirname + 'input/02 - no more mr nice guy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BadGuy"
        );
    });

    test("Two jokers", function() {
        let inputFile = new File(__dirname + 'input/03 - two jokers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Joker2"
        );
    });

    test("Tit for tat", function() {
        let inputFile = new File(__dirname + 'input/04 - tit for tat.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Joker"
        );
    });

    test("Nice guy but don’t fool me", function() {
        let inputFile = new File(__dirname + 'input/05 - nice guy but don’t fool me.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DRAW"
        );
    });

    test("Short memory nice guy", function() {
        let inputFile = new File(__dirname + 'input/06 - short memory nice guy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BirdyNiceGuy"
        );
    });

    test("Machiavel", function() {
        let inputFile = new File(__dirname + 'input/07 - machiavel.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "FlipFlop"
        );
    });
});
