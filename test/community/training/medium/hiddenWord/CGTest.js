import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/hiddenWord/hiddenWord.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hidden word", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Horizontal words", function() {
        let inputFile = new File(__dirname + 'input/01 - horizontal words.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "RED"
        );
    });

    test("Vertical words", function() {
        let inputFile = new File(__dirname + 'input/02 - vertical words.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TIM"
        );
    });

    test("All directions (small)", function() {
        let inputFile = new File(__dirname + 'input/03 - all directions (small).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OK"
        );
    });

    test("All directions (big)", function() {
        let inputFile = new File(__dirname + 'input/04 - all directions (big).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CODNGAME"
        );
    });
});
