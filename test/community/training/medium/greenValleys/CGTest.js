import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/greenValleys/greenValleys.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Green valleys", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One valley", function() {
        let inputFile = new File(__dirname + 'input/01 - one valley.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Two valleys", function() {
        let inputFile = new File(__dirname + 'input/02 - two valleys.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1072
        );
    });

    test("Three valleys", function() {
        let inputFile = new File(__dirname + 'input/03 - three valleys.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            51
        );
    });

    test("No valley", function() {
        let inputFile = new File(__dirname + 'input/04 - no valley.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Alps and valleys", function() {
        let inputFile = new File(__dirname + 'input/05 - alps and valleys.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            420
        );
    });
});
