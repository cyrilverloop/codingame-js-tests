import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/mitosisMayhem/mitosisMayhem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Mitosis mayhem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("All full", function() {
        let inputFile = new File(__dirname + 'input/01 - all full.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Red: 10"
        );
    });

    test("Missing a few", function() {
        let inputFile = new File(__dirname + 'input/02 - missing a few.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - missing a few.txt');
    });

    test("Multiple", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - multiple.txt');
    });

    test("Overflow!", function() {
        let inputFile = new File(__dirname + 'input/04 - overflow!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OVERFLOW!"
        );
    });

    test("Overflow! 2", function() {
        let inputFile = new File(__dirname + 'input/05 - overflow! 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OVERFLOW!"
        );
    });

    test("Stop!", function() {
        let inputFile = new File(__dirname + 'input/06 - stop!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - stop!.txt');
    });

    test("Conflict!", function() {
        let inputFile = new File(__dirname + 'input/07 - conflict!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - conflict!.txt');
    });

    test("Overpowered", function() {
        let inputFile = new File(__dirname + 'input/08 - overpowered.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - overpowered.txt');
    });

    test("Uneven conflict", function() {
        let inputFile = new File(__dirname + 'input/09 - uneven conflict.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - uneven conflict.txt');
    });

    test("Consumption", function() {
        let inputFile = new File(__dirname + 'input/10 - consumption.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - consumption.txt');
    });

    test("Bigger fish", function() {
        let inputFile = new File(__dirname + 'input/11 - bigger fish.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - bigger fish.txt');
    });

    test("Skip the little ones", function() {
        let inputFile = new File(__dirname + 'input/12 - skip the little ones.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - skip the little ones.txt');
    });

    test("Imperfect conflict", function() {
        let inputFile = new File(__dirname + 'input/13 - imperfect conflict.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/13 - imperfect conflict.txt');
    });
});
