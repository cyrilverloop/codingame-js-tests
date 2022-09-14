import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/roadTrip/roadTrip.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Road trip", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Few real friends", function() {
        let inputFile = new File(__dirname + 'input/01 - few real friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("Only fake friends", function() {
        let inputFile = new File(__dirname + 'input/02 - only fake friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Useless fake friends", function() {
        let inputFile = new File(__dirname + 'input/03 - useless fake friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            156
        );
    });

    test("Necessary fake friends", function() {
        let inputFile = new File(__dirname + 'input/04 - necessary fake friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            46
        );
    });

    test("Forever alone", function() {
        let inputFile = new File(__dirname + 'input/05 - forever alone.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("No base cost", function() {
        let inputFile = new File(__dirname + 'input/06 - no base cost.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            97
        );
    });

    test("Only base cost", function() {
        let inputFile = new File(__dirname + 'input/07 - only base cost.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            70
        );
    });

    test("Free trip!", function() {
        let inputFile = new File(__dirname + 'input/08 - free trip!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            66
        );
    });

    test("Many real friends", function() {
        let inputFile = new File(__dirname + 'input/09 - many real friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            21515517
        );
    });

    test("Many friends", function() {
        let inputFile = new File(__dirname + 'input/10 - many friends.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12211143
        );
    });
});
