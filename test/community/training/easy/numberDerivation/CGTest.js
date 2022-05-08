import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/numberDerivation/numberDerivation.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Number derivation", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Prime number", function() {
        let inputFile = new File(__dirname + 'input/01 - prime number.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Power of prime", function() {
        let inputFile = new File(__dirname + 'input/02 - power of prime.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            108
        );
    });

    test("Product of primes", function() {
        let inputFile = new File(__dirname + 'input/03 - product of primes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8
        );
    });

    test("Integer", function() {
        let inputFile = new File(__dirname + 'input/04 - integer.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            41
        );
    });

    test("n’=n", function() {
        let inputFile = new File(__dirname + 'input/05 - n’=n.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            27
        );
    });
});
