import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/kaprekarsRoutine/kaprekarsRoutine.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Kaprekar's routine", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Length 1 cycle", function() {
        let inputFile = new File(__dirname + 'input/01 - length 1 cycle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6174
        );
    });

    test("Dont forget padding", function() {
        let inputFile = new File(__dirname + 'input/02 - dont forget padding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "09 81 63 27 45"
        );
    });

    test("Number of the beast", function() {
        let inputFile = new File(__dirname + 'input/03 - number of the beast.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "000"
        );
    });

    test("Big", function() {
        let inputFile = new File(__dirname + 'input/04 - big.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "43208766 85317642 75308643 84308652 86308632 86326632 64326654"
        );
    });
});
