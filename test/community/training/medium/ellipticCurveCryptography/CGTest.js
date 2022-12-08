import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/ellipticCurveCryptography/ellipticCurveCryptography.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Elliptic curve cryptography", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small unique", function() {
        let inputFile = new File(__dirname + 'input/01 - small unique.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0x2544b2250b8b1e1c"
        );
    });

    test("Small multiple", function() {
        let inputFile = new File(__dirname + 'input/02 - small multiple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small multiple.txt');
    });

    test("Medium multiple", function() {
        let inputFile = new File(__dirname + 'input/03 - Medium multiple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - Medium multiple.txt');
    });

    test("Long unique", function() {
        let inputFile = new File(__dirname + 'input/04 - long unique.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0x26f5eb3181bfeddf"
        );
    });

    test("Long multiple", function() {
        let inputFile = new File(__dirname + 'input/05 - long multiple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - long multiple.txt');
    });
});
