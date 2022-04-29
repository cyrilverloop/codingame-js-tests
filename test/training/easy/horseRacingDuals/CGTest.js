import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/easy/horseRacingDuals/horseRacingDuals.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Horse-racing duals", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple case", function() {
        let inputFile = new File(__dirname + 'input/01 - simple case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Horses in any order", function() {
        let inputFile = new File(__dirname + 'input/02 - horses in any order.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Many horses", function() {
        let inputFile = new File(__dirname + 'input/03 - many horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            47
        );
    });
});
