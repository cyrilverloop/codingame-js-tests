import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/tenPinBowlingScores/tenPinBowlingScores.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("10 pin bowling scores", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("No strikes no spares", function() {
        let inputFile = new File(__dirname + 'input/01 - no strikes no spares.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 13 18 26 31 32 34 40 47 54"
        );
    });

    test("Spares", function() {
        let inputFile = new File(__dirname + 'input/02 - spares.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - spares.txt');
    });

    test("Strikes", function() {
        let inputFile = new File(__dirname + 'input/03 - strikes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - strikes.txt');
    });

    test("Strikes and spares", function() {
        let inputFile = new File(__dirname + 'input/04 - strikes and spares.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - strikes and spares.txt');
    });
});
