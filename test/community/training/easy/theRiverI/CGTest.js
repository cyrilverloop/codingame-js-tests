import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/theRiverI/theRiverI.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The River I.", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("We will meet at 47", function() {
        let inputFile = new File(__dirname + 'input/01 - we will meet at 47.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            47
        );
    });

    test("r1 < r2", function() {
        let inputFile = new File(__dirname + 'input/02 - r1 < r2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            111
        );
    });

    test("r1 > r2", function() {
        let inputFile = new File(__dirname + 'input/03 - r1 > r2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            620
        );
    });

    test("More than... I.", function() {
        let inputFile = new File(__dirname + 'input/04 - more than I.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            483
        );
    });

    test("More than... II.", function() {
        let inputFile = new File(__dirname + 'input/05 - more than II.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2103
        );
    });

    test("River 2489", function() {
        let inputFile = new File(__dirname + 'input/06 - river 2489.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5215
        );
    });

    test("River 13", function() {
        let inputFile = new File(__dirname + 'input/07 - river 13.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20014
        );
    });

    test("Primes", function() {
        let inputFile = new File(__dirname + 'input/08 - primes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1118
        );
    });

    test("Even bigger", function() {
        let inputFile = new File(__dirname + 'input/09 - even bigger.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            15490633
        );
    });
});
