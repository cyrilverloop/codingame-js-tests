import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/englishLengthUnitsConversion/englishLengthUnitsConversion.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("English length units conversion", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Direct relations", function() {
        let inputFile = new File(__dirname + 'input/01 - direct relations.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 inch = 1440 twip"
        );
    });

    test("Direct relations with dead end", function() {
        let inputFile = new File(__dirname + 'input/02 - direct relations with dead end.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1440 twip = 1 inch"
        );
    });

    test("With loops", function() {
        let inputFile = new File(__dirname + 'input/03 - with loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1440 twip = 1 inch"
        );
    });

    test("Full tree", function() {
        let inputFile = new File(__dirname + 'input/04 - full tree.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 spindle = 12 league"
        );
    });
});
