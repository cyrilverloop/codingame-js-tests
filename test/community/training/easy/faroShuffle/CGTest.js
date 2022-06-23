import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/faroShuffle/faroShuffle.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Faro shuffle", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Aces", function() {
        let inputFile = new File(__dirname + 'input/01 - aces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AS AD AH AC"
        );
    });

    test("Odd number of cards", function() {
        let inputFile = new File(__dirname + 'input/02 - odd number of cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2S JH 5D JD QH 5S 3S KH 4S"
        );
    });

    test("Multiple shuffles", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple shuffles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "KS 8S 5S QH 5H 9D 6D AH KD KH AS 7H 3S 5D QS 4S JH KC 5C JS"
        );
    });

    test("Fresh deck", function() {
        let inputFile = new File(__dirname + 'input/04 - fresh deck.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - fresh deck.txt');
    });
});
