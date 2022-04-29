import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/sevenSegmentScanner/sevenSegmentScanner.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("7-segment scanner", function() {
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
            "0123456789"
        );
    });

    test("Zeroes", function() {
        let inputFile = new File(__dirname + 'input/02 - zeroes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "000"
        );
    });

    test("Short number", function() {
        let inputFile = new File(__dirname + 'input/03 - short number.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "625"
        );
    });

    test("Long number", function() {
        let inputFile = new File(__dirname + 'input/04 - long number.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0123456789876543210"
        );
    });

    test("Super long number", function() {
        let inputFile = new File(__dirname + 'input/05 - super long number.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - super long number.txt');
    });
});
