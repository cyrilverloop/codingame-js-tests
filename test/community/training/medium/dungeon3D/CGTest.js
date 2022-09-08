import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/dungeon3D/dungeon3D.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dungeon 3D", function() {
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

    test("Small", function() {
        let inputFile = new File(__dirname + 'input/02 - small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Direct access", function() {
        let inputFile = new File(__dirname + 'input/03 - direct access.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("NO PATH", function() {
        let inputFile = new File(__dirname + 'input/04 - NO PATH.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NO PATH"
        );
    });

    test("10's cube", function() {
        let inputFile = new File(__dirname + 'input/05 - 10\'s cube.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14
        );
    });

    test("13's cube", function() {
        let inputFile = new File(__dirname + 'input/06 - 13\'s cube.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            95
        );
    });

    test("Multi-path 1", function() {
        let inputFile = new File(__dirname + 'input/07 - multi-path 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            138
        );
    });

    test("Multi-path 2", function() {
        let inputFile = new File(__dirname + 'input/08 - multi-path 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            102
        );
    });

    test("Space", function() {
        let inputFile = new File(__dirname + 'input/09 - space.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            30
        );
    });

    test("Codingame", function() {
        let inputFile = new File(__dirname + 'input/10 - codingame.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            17
        );
    });
});
