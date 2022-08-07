import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/diceProbabilityCalculator/diceProbabilityCalculator.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dice probability calculator", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A die and two additions", function() {
        let inputFile = new File(__dirname + 'input/01 - a die and two additions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - a die and two additions.txt');
    });

    test("Simple comparison", function() {
        let inputFile = new File(__dirname + 'input/02 - simple comparison.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 100.00"
        );
    });

    test("Addition of two dice", function() {
        let inputFile = new File(__dirname + 'input/03 - addition of two dice.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - addition of two dice.txt');
    });

    test("Comparaison with sum of dice", function() {
        let inputFile = new File(__dirname + 'input/04 - comparaison with sum of dice.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - comparaison with sum of dice.txt');
    });

    test("Subtraction of dice", function() {
        let inputFile = new File(__dirname + 'input/05 - subtraction of dice.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - subtraction of dice.txt');
    });

    test("Multiplication of dice", function() {
        let inputFile = new File(__dirname + 'input/06 - multiplication of dice.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - multiplication of dice.txt');
    });

    test("FIX IT !", function() {
        let inputFile = new File(__dirname + 'input/07 - FIX IT !.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - FIX IT !.txt');
    });
});
