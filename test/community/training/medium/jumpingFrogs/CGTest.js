import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/jumpingFrogs/jumpingFrogs.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Jumping frogs", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple jump", function() {
        let inputFile = new File(__dirname + 'input/01 - simple jump.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("Little stretch", function() {
        let inputFile = new File(__dirname + 'input/02 - little stretch.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Long jump", function() {
        let inputFile = new File(__dirname + 'input/03 - long jump.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("Javelin jump", function() {
        let inputFile = new File(__dirname + 'input/04 - javelin jump.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Teleport", function() {
        let inputFile = new File(__dirname + 'input/05 - teleport.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("All i need is jump", function() {
        let inputFile = new File(__dirname + 'input/06 - all i need is jump.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("Jump for the win", function() {
        let inputFile = new File(__dirname + 'input/07 - jump for the win.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Jump is not enough", function() {
        let inputFile = new File(__dirname + 'input/08 - jump is not enough.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Too many Jumps", function() {
        let inputFile = new File(__dirname + 'input/09 - too many Jumps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("Lot of jumps", function() {
        let inputFile = new File(__dirname + 'input/10 - lot of jumps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Possible"
        );
    });

    test("Fly in the air", function() {
        let inputFile = new File(__dirname + 'input/11 - fly in the air.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Over the mountain", function() {
        let inputFile = new File(__dirname + 'input/12 - over the mountain.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });

    test("Over the sky", function() {
        let inputFile = new File(__dirname + 'input/13 - over the sky.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Impossible"
        );
    });
});
