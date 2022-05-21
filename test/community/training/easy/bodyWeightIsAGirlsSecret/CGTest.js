import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/bodyWeightIsAGirlsSecret/bodyWeightIsAGirlsSecret.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Body weight is a girl's secret", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("All different", function() {
        let inputFile = new File(__dirname + 'input/01 - all different.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "45 51 52 63 76"
        );
    });

    test("Same paired values", function() {
        let inputFile = new File(__dirname + 'input/02 - same paired values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "40 51 62 73 84"
        );
    });

    test("Same individual values", function() {
        let inputFile = new File(__dirname + 'input/03 - same individual values.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "20 487 487 488 489"
        );
    });

    test("Including a baby", function() {
        let inputFile = new File(__dirname + 'input/04 - including a baby.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 81 100 105 111"
        );
    });

    test("XXL", function() {
        let inputFile = new File(__dirname + 'input/05 - XXL.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "798 841 843 999 1000"
        );
    });
});
