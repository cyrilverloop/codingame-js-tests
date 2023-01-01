import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/remainderFantasy/remainderFantasy.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Simple", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            23
        );
    });

    test("Warm up", function() {
        let inputFile = new File(__dirname + 'input/02 - warm up.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1731
        );
    });

    test("Harder", function() {
        let inputFile = new File(__dirname + 'input/03 - harder.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            353594
        );
    });

    test("Get serious", function() {
        let inputFile = new File(__dirname + 'input/04 - get serious.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            199022964
        );
    });

    test("Brute-force not work", function() {
        let inputFile = new File(__dirname + 'input/05 - brute-force not work.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1699580108
        );
    });

    test("Many Conditions", function() {
        let inputFile = new File(__dirname + 'input/06 - many conditions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1780880663
        );
    });

    test("A few big conditions", function() {
        let inputFile = new File(__dirname + 'input/07 - a few big conditions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2097947989
        );
    });

    test("Tricky small", function() {
        let inputFile = new File(__dirname + 'input/08 - tricky small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            241
        );
    });

    test("Nasty big", function() {
        let inputFile = new File(__dirname + 'input/09 - nasty big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1024360583
        );
    });
});
