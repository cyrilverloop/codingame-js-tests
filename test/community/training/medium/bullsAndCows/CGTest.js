import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/bullsAndCows/bullsAndCows.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bulls and cows", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("All bulls", function() {
        let inputFile = new File(__dirname + 'input/01 - all bulls.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1234
        );
    });

    test("Pair of cows", function() {
        let inputFile = new File(__dirname + 'input/02 - pair of cows.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0374"
        );
    });

    test("Two pair of bulls", function() {
        let inputFile = new File(__dirname + 'input/03 - two pair of bulls.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9278
        );
    });

    test("Nothing but cows", function() {
        let inputFile = new File(__dirname + 'input/04 - nothing but cows.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8787
        );
    });

    test("Lone bulls", function() {
        let inputFile = new File(__dirname + 'input/05 - lone bulls.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8528
        );
    });

    test("One for all", function() {
        let inputFile = new File(__dirname + 'input/06 - one for all.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1111
        );
    });

    test("Bad guesser", function() {
        let inputFile = new File(__dirname + 'input/07 - bad guesser.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7827
        );
    });
});
