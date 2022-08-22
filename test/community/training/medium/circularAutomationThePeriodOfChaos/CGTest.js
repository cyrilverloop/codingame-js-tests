import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/circularAutomationThePeriodOfChaos/circularAutomationThePeriodOfChaos.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Circular automation, the period of chaos", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple example", function() {
        let inputFile = new File(__dirname + 'input/01 - simple example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Blinker", function() {
        let inputFile = new File(__dirname + 'input/02 - blinker.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Rule 250 mix", function() {
        let inputFile = new File(__dirname + 'input/03 - rule 250 mix.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("126 = fractal", function() {
        let inputFile = new File(__dirname + 'input/04 - 126 = fractal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1022
        );
    });

    test("So Long", function() {
        let inputFile = new File(__dirname + 'input/05 - so long.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BIG"
        );
    });

    test("Rule 110", function() {
        let inputFile = new File(__dirname + 'input/06 - rule 110.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2730
        );
    });

    test("Where is the motif", function() {
        let inputFile = new File(__dirname + 'input/07 - where is the motif.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1455
        );
    });
});
