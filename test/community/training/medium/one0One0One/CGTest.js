import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/one0One0One/one0One0One.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("1010(1)", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tiny", function() {
        let inputFile = new File(__dirname + 'input/01 - tiny.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Stretch", function() {
        let inputFile = new File(__dirname + 'input/02 - stretch.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("You lose", function() {
        let inputFile = new File(__dirname + 'input/03 - you lose.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Big", function() {
        let inputFile = new File(__dirname + 'input/04 - big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });
});
