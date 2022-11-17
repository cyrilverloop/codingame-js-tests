import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/digitSumSuccessor/digitSumSuccessor.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Digit sum successor", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Two", function() {
        let inputFile = new File(__dirname + 'input/01 - two.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });

    test("Simple test", function() {
        let inputFile = new File(__dirname + 'input/02 - simple test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            51
        );
    });

    test("Trailing zeros", function() {
        let inputFile = new File(__dirname + 'input/03 - trailing zeros.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            50001
        );
    });

    test("Trailing zeros and nines", function() {
        let inputFile = new File(__dirname + 'input/04 - trailing zeros and nines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            43000899
        );
    });

    test("Need more length", function() {
        let inputFile = new File(__dirname + 'input/05 - need more length.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10000000006
        );
    });

    test("Random test", function() {
        let inputFile = new File(__dirname + 'input/06 - random test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1570175191
        );
    });

    test("Only nines", function() {
        let inputFile = new File(__dirname + 'input/07 - only nines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1899999999
        );
    });

    test("Zeros and nines", function() {
        let inputFile = new File(__dirname + 'input/08 - zeros and nines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3700029999
        );
    });

    test("Zeros and nines 2", function() {
        let inputFile = new File(__dirname + 'input/09 - zeros and nines 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10499
        );
    });

    test("Zeros and nines 3", function() {
        let inputFile = new File(__dirname + 'input/10 - zeros and nines 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            420018999
        );
    });

    test("Zeros and nines 4", function() {
        let inputFile = new File(__dirname + 'input/11 - zeros and nines 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            420068999
        );
    });
});
