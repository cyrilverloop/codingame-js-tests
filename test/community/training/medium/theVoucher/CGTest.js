import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theVoucher/theVoucher.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The voucher", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1) Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("2) 3 copies of each", function() {
        let inputFile = new File(__dirname + 'input/02 - 3 copies of each.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("3) many solutions", function() {
        let inputFile = new File(__dirname + 'input/03 - many solutions.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("4) different products with same price", function() {
        let inputFile = new File(__dirname + 'input/04 - different products with same price.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            40
        );
    });

    test("5) more money", function() {
        let inputFile = new File(__dirname + 'input/05 - more money.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            13
        );
    });
});
