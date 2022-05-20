import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/masterOfMayhem/masterOfMayhem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Master of mayhem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "SPEEDO"
        );
    });

    test("No info", function() {
        let inputFile = new File(__dirname + 'input/02 - no info.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CHICO"
        );
    });

    test("Too many cooks", function() {
        let inputFile = new File(__dirname + 'input/03 - too many cooks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INDETERMINATE"
        );
    });

    test("Nobody left", function() {
        let inputFile = new File(__dirname + 'input/04 - nobody left.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "MISSING"
        );
    });

    test("Only one", function() {
        let inputFile = new File(__dirname + 'input/05 - only one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "SOLO"
        );
    });
});
