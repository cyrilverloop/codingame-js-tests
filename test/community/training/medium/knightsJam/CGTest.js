import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/knightsJam/knightsJam.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Knights jam", function() {
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
            3
        );
    });

    test("Central problem #1", function() {
        let inputFile = new File(__dirname + 'input/02 - central problem #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Central problem #2", function() {
        let inputFile = new File(__dirname + 'input/03 - central problem #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Reachable #1", function() {
        let inputFile = new File(__dirname + 'input/04 - reachable #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Unreachable #1", function() {
        let inputFile = new File(__dirname + 'input/05 - unreachable #1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Reachable #2", function() {
        let inputFile = new File(__dirname + 'input/06 - reachable #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Unreachable #2", function() {
        let inputFile = new File(__dirname + 'input/07 - unreachable #2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Reachable #3", function() {
        let inputFile = new File(__dirname + 'input/08 - reachable #3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });

    test("Unreachable #3", function() {
        let inputFile = new File(__dirname + 'input/09 - unreachable #3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Reachable #4", function() {
        let inputFile = new File(__dirname + 'input/10 - reachable #4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15
        );
    });

    test("Unreachable #4", function() {
        let inputFile = new File(__dirname + 'input/11 - unreachable #4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Unreachable #5", function() {
        let inputFile = new File(__dirname + 'input/12 - unreachable #5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            -1
        );
    });

    test("Reachable #5", function() {
        let inputFile = new File(__dirname + 'input/13 - reachable #5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            21
        );
    });
});
