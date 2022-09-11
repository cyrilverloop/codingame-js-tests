import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/mazeWithTeleportersAndJumps/mazeWithTeleportersAndJumps.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Maze /w teleporters and jumps", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Jumps", function() {
        let inputFile = new File(__dirname + 'input/02 - jumps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("No way out", function() {
        let inputFile = new File(__dirname + 'input/03 - no way out.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Teleporter maze", function() {
        let inputFile = new File(__dirname + 'input/04 - teleporter maze.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15
        );
    });

    test("Jumps and teleports", function() {
        let inputFile = new File(__dirname + 'input/05 - jumps and teleports.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("Don't take it", function() {
        let inputFile = new File(__dirname + 'input/06 - don\'t take it.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });
});
