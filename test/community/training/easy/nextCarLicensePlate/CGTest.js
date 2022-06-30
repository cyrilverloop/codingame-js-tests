import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/nextCarLicensePlate/nextCarLicensePlate.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Next car license plate ?", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("+5", function() {
        let inputFile = new File(__dirname + 'input/01 - +5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AB-128-CD"
        );
    });

    test("+100", function() {
        let inputFile = new File(__dirname + 'input/02 - +100.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AZ-666-QS"
        );
    });

    test("999+1", function() {
        let inputFile = new File(__dirname + 'input/03 - 999+1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BN-001-GI"
        );
    });

    test("+10000", function() {
        let inputFile = new File(__dirname + 'input/04 - +10000.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CG-017-CQ"
        );
    });

    test("+100000", function() {
        let inputFile = new File(__dirname + 'input/05 - +100000.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IO-110-SE"
        );
    });

    test("+1000000", function() {
        let inputFile = new File(__dirname + 'input/06 - +1000000.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "QT-457-PS"
        );
    });

    test("Very big", function() {
        let inputFile = new File(__dirname + 'input/07 - very big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "JQ-027-XY"
        );
    });
});
