import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/queneauNumbers/queneauNumbers.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Queneau numbers", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Terine", function() {
        let inputFile = new File(__dirname + 'input/01 - terine.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - terine.txt');
    });

    test("Impossible", function() {
        let inputFile = new File(__dirname + 'input/02 - impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });

    test("Sextine", function() {
        let inputFile = new File(__dirname + 'input/03 - sextine.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - sextine.txt');
    });

    test("So big yet so perfect", function() {
        let inputFile = new File(__dirname + 'input/04 - so big yet so perfect.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - so big yet so perfect.txt');
    });

    test("So big yet so ugly", function() {
        let inputFile = new File(__dirname + 'input/05 - so big yet so ugly.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IMPOSSIBLE"
        );
    });
});
