import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bustSpeedingVehicles/bustSpeedingVehicles.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bust speeding vehicles", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example test", function() {
        let inputFile = new File(__dirname + 'input/01 - example test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "RSLJ97 185"
        );
    });

    test("No excess speed", function() {
        let inputFile = new File(__dirname + 'input/02 - no excess speed.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OK"
        );
    });

    test("More than one car in excess speed", function() {
        let inputFile = new File(__dirname + 'input/03 - more than one car in excess speed.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - more than one car in excess speed.txt');
    });

    test("Speed limit", function() {
        let inputFile = new File(__dirname + 'input/04 - speed limit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ZBZJ42 275"
        );
    });
});
