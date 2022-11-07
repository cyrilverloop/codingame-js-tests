import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/barcodeScanner/barcodeScanner.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Barcode scanner", function() {
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
            "4003994155486"
        );
    });

    test("Ukraine", function() {
        let inputFile = new File(__dirname + 'input/02 - ukraine.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4820011185802"
        );
    });

    test("Great britain (reversed)", function() {
        let inputFile = new File(__dirname + 'input/03 - great britain (reversed).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5011386029399"
        );
    });

    test("Germany", function() {
        let inputFile = new File(__dirname + 'input/04 - germany.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4012991656698"
        );
    });

    test("Wrong checksum", function() {
        let inputFile = new File(__dirname + 'input/05 - wrong checksum.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID SCAN"
        );
    });

    test("Broken guard(s)", function() {
        let inputFile = new File(__dirname + 'input/06 - broken guard(s).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID SCAN"
        );
    });

    test("Broken parity", function() {
        let inputFile = new File(__dirname + 'input/07 - broken parity.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID SCAN"
        );
    });

    test("Other error (reversed)", function() {
        let inputFile = new File(__dirname + 'input/08 - other error (reversed).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID SCAN"
        );
    });

    test("Book (reversed)", function() {
        let inputFile = new File(__dirname + 'input/09 - book (reversed).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9785961468748"
        );
    });
});
