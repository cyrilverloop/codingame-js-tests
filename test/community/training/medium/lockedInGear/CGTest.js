import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/lockedInGear/lockedInGear.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Locked in gear", function() {
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
            "CCW"
        );
    });

    test("The missing link", function() {
        let inputFile = new File(__dirname + 'input/02 - the missing link.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NOT MOVING"
        );
    });

    test("A dead end", function() {
        let inputFile = new File(__dirname + 'input/03 - a dead end.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CCW"
        );
    });

    test("Jammed", function() {
        let inputFile = new File(__dirname + 'input/04 - jammed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NOT MOVING"
        );
    });

    test("This problem is beyond me", function() {
        let inputFile = new File(__dirname + 'input/05 - this problem is beyond me.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "NOT MOVING"
        );
    });

    test("Lots of gears", function() {
        let inputFile = new File(__dirname + 'input/06 - lots of gears.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CW"
        );
    });

    test("An entire different problem altogether", function() {
        let inputFile = new File(__dirname + 'input/07 - an entire different problem altogether.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CCW"
        );
    });
});
