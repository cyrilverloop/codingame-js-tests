import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/isTheKingInCheckPart1/isTheKingInCheckPart1.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Is the king in check? (part 1)", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("R vs K", function() {
        let inputFile = new File(__dirname + 'input/01 - R vs K.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Check"
        );
    });

    test("B vs K", function() {
        let inputFile = new File(__dirname + 'input/02 - B vs K.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "No Check"
        );
    });

    test("Q vs K", function() {
        let inputFile = new File(__dirname + 'input/03 - Q vs K.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Check"
        );
    });

    test("N vs K", function() {
        let inputFile = new File(__dirname + 'input/04 - N vs K.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "No Check"
        );
    });

    test("Test 5", function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Check"
        );
    });
});
