import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/propositionsInFregesIdeography/propositionsInFregesIdeography.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Propositions in Frege’s ideography", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A implies A", function() {
        let inputFile = new File(__dirname + 'input/01 - A implies A.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("Formula 31 (fifth axiom)", function() {
        let inputFile = new File(__dirname + 'input/02 - formula 31 (fifth axiom).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("A implies B", function() {
        let inputFile = new File(__dirname + 'input/03 - A implies B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A True B False"
        );
    });

    test("A nor B", function() {
        let inputFile = new File(__dirname + 'input/04 - A nor B.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - A nor B.txt');
    });

    test("Formula 1 (first axiom)", function() {
        let inputFile = new File(__dirname + 'input/05 - formula 1 (first axiom).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("Formula 2 (second axiom)", function() {
        let inputFile = new File(__dirname + 'input/06 - formula 2 (second axiom).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("Formula 8 (third axiom)", function() {
        let inputFile = new File(__dirname + 'input/07 - formula 8 (third axiom).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("Formula 28 (fourth axiom)", function() {
        let inputFile = new File(__dirname + 'input/08 - formula 28 (fourth axiom).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TAUTOLOGY"
        );
    });

    test("(C and B) implies A is not a tautology", function() {
        let inputFile = new File(__dirname + 'input/09 - (C and B) implies A is not a tautology.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A False B True C True"
        );
    });

    test("[(C and B) implies A] implies [(C implies B) implies A] is not a tautology", function() {
        let inputFile = new File(__dirname + 'input/10 - [(C and B) implies A] implies [(C implies B) implies A] is not a tautology.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - [(C and B) implies A] implies [(C implies B) implies A] is not a tautology.txt');
    });
});
