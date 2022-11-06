import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/playfairCipher/playfairCipher.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Playfair cipher", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Row", function() {
        let inputFile = new File(__dirname + 'input/01 - row.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IF"
        );
    });

    test("Column", function() {
        let inputFile = new File(__dirname + 'input/02 - column.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "MW"
        );
    });

    test("Row and column", function() {
        let inputFile = new File(__dirname + 'input/03 - row and column.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - row and column.txt');
    });

    test("Invalid characters", function() {
        let inputFile = new File(__dirname + 'input/04 - invalid characters.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - invalid characters.txt');
    });

    test("Decryption", function() {
        let inputFile = new File(__dirname + 'input/05 - decryption.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - decryption.txt');
    });

    test("DUD", function() {
        let inputFile = new File(__dirname + 'input/06 - DUD.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - DUD.txt');
    });

    test("Some messages", function() {
        let inputFile = new File(__dirname + 'input/07 - some messages.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - some messages.txt');
    });

    test("More messages", function() {
        let inputFile = new File(__dirname + 'input/08 - more messages.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - more messages.txt');
    });
});
