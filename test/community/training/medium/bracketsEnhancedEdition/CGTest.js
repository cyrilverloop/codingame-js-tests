import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bracketsEnhancedEdition/bracketsEnhancedEdition.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Brackets, enhanced edition", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Extreme", function() {
        let inputFile = new File(__dirname + 'input/02 - extreme.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - extreme.txt');
    });

    test("Unextreme at little cost", function() {
        let inputFile = new File(__dirname + 'input/03 - unextreme at little cost.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - unextreme at little cost.txt');
    });

    test("Complex expressions", function() {
        let inputFile = new File(__dirname + 'input/04 - complex expressions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - complex expressions.txt');
    });

    test("What's your bias?", function() {
        let inputFile = new File(__dirname + 'input/05 - what\'s your bias?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - what\'s your bias?.txt');
    });

    test("More complex expressions", function() {
        let inputFile = new File(__dirname + 'input/06 - more complex expressions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - more complex expressions.txt');
    });

    test("Ramp up", function() {
        let inputFile = new File(__dirname + 'input/07 - ramp up.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - ramp up.txt');
    });

    test("Very complex salvageable", function() {
        let inputFile = new File(__dirname + 'input/08 - Very complex salvageable.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Very complex unsalvageable", function() {
        let inputFile = new File(__dirname + 'input/09 - Very complex unsalvageable.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });
});
