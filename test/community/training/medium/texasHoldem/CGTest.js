import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/texasHoldem/texasHoldem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Texas holdem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1 - high card", function() {
        let inputFile = new File(__dirname + 'input/01 - test 1 - high card.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 HIGH_CARD K9875"
        );
    });

    test("Test 2 - high card, last kicker", function() {
        let inputFile = new File(__dirname + 'input/02 - test 2 - high card, last kicker.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 HIGH_CARD AK987"
        );
    });

    test("Test 3 - flush", function() {
        let inputFile = new File(__dirname + 'input/03 - test 3 - flush.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 FLUSH K9432"
        );
    });

    test("Test 4 - straight flush vs flush", function() {
        let inputFile = new File(__dirname + 'input/04 - test 4 - straight flush vs flush.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 STRAIGHT_FLUSH 5432A"
        );
    });

    test("Test 5 - full house", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5 - full house.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 FULL_HOUSE 66655"
        );
    });

    test("Test 6 - best two pair", function() {
        let inputFile = new File(__dirname + 'input/06 - test 6 - best two pair.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 TWO_PAIR AA669"
        );
    });

    test("Test 7 - three vs four of a kind", function() {
        let inputFile = new File(__dirname + 'input/07 - test 7 - three vs four of a kind.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 FOUR_OF_A_KIND 5555A"
        );
    });

    test("Test 8 - draw", function() {
        let inputFile = new File(__dirname + 'input/08 - test 8 - draw.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DRAW"
        );
    });
});
