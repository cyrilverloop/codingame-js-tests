import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/bitCountToLimit/bitCountToLimit.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bit count to limit", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple one", function() {
        let inputFile = new File(__dirname + 'input/01 - simple one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7
        );
    });

    test("A bit more", function() {
        let inputFile = new File(__dirname + 'input/02 - a bit more.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            81
        );
    });

    test("And > 100 ?", function() {
        let inputFile = new File(__dirname + 'input/03 - and > 100 ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            408
        );
    });

    test("Million ?", function() {
        let inputFile = new File(__dirname + 'input/04 - million ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10485761
        );
    });

    test("Did you get the trick ?", function() {
        let inputFile = new File(__dirname + 'input/05 - did you get the trick ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1811939329
        );
    });
});
