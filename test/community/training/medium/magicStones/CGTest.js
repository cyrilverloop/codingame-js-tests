import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/magicStones/magicStones.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Magic stones", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Axiom", function() {
        let inputFile = new File(__dirname + 'input/01 - axiom.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Add me up", function() {
        let inputFile = new File(__dirname + 'input/02 - add me up.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Too far", function() {
        let inputFile = new File(__dirname + 'input/03 - too far.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Odd", function() {
        let inputFile = new File(__dirname + 'input/04 - odd.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Powerless", function() {
        let inputFile = new File(__dirname + 'input/05 - powerless.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Complex", function() {
        let inputFile = new File(__dirname + 'input/06 - complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Huge", function() {
        let inputFile = new File(__dirname + 'input/07 - huge.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12
        );
    });
});
