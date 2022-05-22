import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/piratesTreasure/piratesTreasure.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Pirate's treasure", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Smallest island", function() {
        let inputFile = new File(__dirname + 'input/01 - smallest island.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 0"
        );
    });

    test("Fully surrounded", function() {
        let inputFile = new File(__dirname + 'input/02 - fully surrounded.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 1"
        );
    });

    test("Small island", function() {
        let inputFile = new File(__dirname + 'input/03 - small island.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 3"
        );
    });

    test("Large island", function() {
        let inputFile = new File(__dirname + 'input/04 - large island.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "23 23"
        );
    });

    test("Edge", function() {
        let inputFile = new File(__dirname + 'input/05 - edge.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 0"
        );
    });
});
