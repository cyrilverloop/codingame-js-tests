import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/encryptionDecryptionOfEnigmaMachine/encryptionDecryptionOfEnigmaMachine.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Encryption/decryption of Enigma machine", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Encode 3", function() {
        let inputFile = new File(__dirname + 'input/01 - encode 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "KQF"
        );
    });

    test("Encode 23", function() {
        let inputFile = new File(__dirname + 'input/02 - encode 23.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ALWAURKQEQQWLRAWZHUYKVN"
        );
    });

    test("Decode 21", function() {
        let inputFile = new File(__dirname + 'input/03 - decode 21.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "EVERYONEISWELCOMEHERE"
        );
    });

    test("Encode 21", function() {
        let inputFile = new File(__dirname + 'input/04 - encode 21.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "PQSACVVTOISXFXCIAMQEM"
        );
    });

    test("Encode 42", function() {
        let inputFile = new File(__dirname + 'input/05 - encode 42.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "PQSACVVTOISXFXCIAMQEMDZIXFJJSTQIENEFQXVZYV"
        );
    });

    test("Decode 49", function() {
        let inputFile = new File(__dirname + 'input/06 - decode 49.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "THEQUICKBROWNFOXJUMPSOVERALAZYSPHINXOFBLACKQUARTZ"
        );
    });
});
