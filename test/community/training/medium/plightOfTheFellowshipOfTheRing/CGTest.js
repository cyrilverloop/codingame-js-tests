import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/plightOfTheFellowshipOfTheRing/plightOfTheFellowshipOfTheRing.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Plight of the fellowship of the ring", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One orc", function() {
        let inputFile = new File(__dirname + 'input/01 - one orc.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 3"
        );
    });

    test("Multiple orcs", function() {
        let inputFile = new File(__dirname + 'input/02 - multiple orcs.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 3 4 6"
        );
    });

    test("Many choices", function() {
        let inputFile = new File(__dirname + 'input/03 - many choices.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 1 2 8 9 10 11 7"
        );
    });

    test("Impossible", function() {
        let inputFile = new File(__dirname + 'input/04 - impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });

    test("No orcs!", function() {
        let inputFile = new File(__dirname + 'input/05 - no orcs!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0 2 3"
        );
    });
});
