import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/cardsCastle/cardsCastle.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Cards castle", function() {
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
            "STABLE"
        );
    });

    test("Little castle", function() {
        let inputFile = new File(__dirname + 'input/02 - little castle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Little fallen castle", function() {
        let inputFile = new File(__dirname + 'input/03 - little fallen castle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Fortress", function() {
        let inputFile = new File(__dirname + 'input/04 - fortress.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Fortress fortress", function() {
        let inputFile = new File(__dirname + 'input/05 - fallen fortress.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Cards are missing ?", function() {
        let inputFile = new File(__dirname + 'input/06 - cards are missing ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("A lot of cards are missing ?!", function() {
        let inputFile = new File(__dirname + 'input/07 - a lot of cards are missing ?!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Unstable single card", function() {
        let inputFile = new File(__dirname + 'input/08 - unstable single card.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Flying cards", function() {
        let inputFile = new File(__dirname + 'input/09 - flying cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Reversed cards", function() {
        let inputFile = new File(__dirname + 'input/10 - reversed cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Few floors", function() {
        let inputFile = new File(__dirname + 'input/11 - few floors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("On the gap", function() {
        let inputFile = new File(__dirname + 'input/12 - on the gap.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Starting on", function() {
        let inputFile = new File(__dirname + 'input/13 - starting on.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Shifted", function() {
        let inputFile = new File(__dirname + 'input/14 - shifted.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Flying castle cards", function() {
        let inputFile = new File(__dirname + 'input/15 - flying castle cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Same card side by side", function() {
        let inputFile = new File(__dirname + 'input/16 - same card side by side.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Same flying card side by side", function() {
        let inputFile = new File(__dirname + 'input/17 - same flying card side by side.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("Flying reversed card side by side", function() {
        let inputFile = new File(__dirname + 'input/18 - flying reversed card side by side.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UNSTABLE"
        );
    });

    test("The shifted unique one", function() {
        let inputFile = new File(__dirname + 'input/19 - the shifted unique one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Lost cards", function() {
        let inputFile = new File(__dirname + 'input/20 - lost cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });

    test("Complex", function() {
        let inputFile = new File(__dirname + 'input/21 - complex.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "STABLE"
        );
    });
});
