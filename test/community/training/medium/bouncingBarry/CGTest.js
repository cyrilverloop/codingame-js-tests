import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bouncingBarry/bouncingBarry.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bouncing barry", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Meandering", function() {
        let inputFile = new File(__dirname + 'input/01 - meandering.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - meandering.txt');
    });

    test("Exploring", function() {
        let inputFile = new File(__dirname + 'input/02 - exploring.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - exploring.txt');
    });

    test("Spiraling", function() {
        let inputFile = new File(__dirname + 'input/03 - spiraling.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - spiraling.txt');
    });

    test("Crossing", function() {
        let inputFile = new File(__dirname + 'input/04 - crossing.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - crossing.txt');
    });

    test("Bobbing and weaving", function() {
        let inputFile = new File(__dirname + 'input/05 - bobbing and weaving.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - bobbing and weaving.txt');
    });

    test("Tail-chasing", function() {
        let inputFile = new File(__dirname + 'input/06 - tail-chasing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "."
        );
    });

    test("Sprinting", function() {
        let inputFile = new File(__dirname + 'input/07 - sprinting.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - sprinting.txt');
    });

    test("Just Drunk...     -ing", function() {
        let inputFile = new File(__dirname + 'input/08 - just drunk-ing.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - just drunk-ing.txt');
    });
});
