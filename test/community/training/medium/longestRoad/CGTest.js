import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/longestRoad/longestRoad.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Longest road", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One player, only roads", function() {
        let inputFile = new File(__dirname + 'input/01 - one player, only roads.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A 6"
        );
    });

    test("One player", function() {
        let inputFile = new File(__dirname + 'input/02 - one player.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A 6"
        );
    });

    test("Not long enough", function() {
        let inputFile = new File(__dirname + 'input/03 - not long enough.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0"
        );
    });

    test("Two players", function() {
        let inputFile = new File(__dirname + 'input/04 - two players.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "B 6"
        );
    });

    test("Four players and overlapping roads", function() {
        let inputFile = new File(__dirname + 'input/05 - four players and overlapping roads.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "C 7"
        );
    });

    test("Loops and branches", function() {
        let inputFile = new File(__dirname + 'input/06 - loops and branches.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A 13"
        );
    });
});
