import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/voteCounting/voteCounting.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Vote counting", function() {
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
            "2 1"
        );
    });

    test("Invalid voter", function() {
        let inputFile = new File(__dirname + 'input/02 - invalid voter.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2"
        );
    });

    test("Too many votes", function() {
        let inputFile = new File(__dirname + 'input/03 - too many votes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 3"
        );
    });

    test("Maybe vote", function() {
        let inputFile = new File(__dirname + 'input/04 - maybe vote.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 0"
        );
    });

    test("Complex", function() {
        let inputFile = new File(__dirname + 'input/05 - complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 1"
        );
    });
});
