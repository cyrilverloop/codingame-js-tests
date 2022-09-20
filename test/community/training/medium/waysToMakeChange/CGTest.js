import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/waysToMakeChange/waysToMakeChange.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Ways to make change", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small change", function() {
        let inputFile = new File(__dirname + 'input/01 - small change.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });

    test("Bigger change", function() {
        let inputFile = new File(__dirname + 'input/02 - bigger change.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            343
        );
    });

    test("That won't be easy !", function() {
        let inputFile = new File(__dirname + 'input/03 - that won\'t be easy !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Bank notes only please", function() {
        let inputFile = new File(__dirname + 'input/04 - bank notes only please.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1022
        );
    });

    test("How am i supposed to do ?!", function() {
        let inputFile = new File(__dirname + 'input/05 - how am i supposed to do ?!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Pushing a bit...", function() {
        let inputFile = new File(__dirname + 'input/06 - pushing a bit....txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            357746987
        );
    });
});
