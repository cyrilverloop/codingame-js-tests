import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/dolbearsLaw/dolbearsLaw.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dolbear's Law", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("The random is in the spring", function() {
        let inputFile = new File(__dirname + 'input/01 - the random is in the spring.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - the random is in the spring.txt');
    });

    test("Winter is coming", function() {
        let inputFile = new File(__dirname + 'input/02 - winter is coming.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4.9
        );
    });

    test("Jiminy beats the measure", function() {
        let inputFile = new File(__dirname + 'input/03 - jiminy beats the measure.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - jiminy beats the measure.txt');
    });

    test("Jiminy nearly died of cold...", function() {
        let inputFile = new File(__dirname + 'input/04 - jiminy nearly died of cold.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4.4
        );
    });

    test("An hour in summer", function() {
        let inputFile = new File(__dirname + 'input/05 - an hour in summer.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - an hour in summer.txt');
    });

    test("30MinutesOfHeatWave", function() {
        let inputFile = new File(__dirname + 'input/06 - 30 minutes of heat wave.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "42.0"
        );
    });
});
