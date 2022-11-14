import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theseRomansAreCrazy/theseRomansAreCrazy.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("These romans are crazy!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("6 + 7 = 13", function() {
        let inputFile = new File(__dirname + 'input/01 - 6 + 7 = 13.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "XIII"
        );
    });

    test("12 + 27 = 39", function() {
        let inputFile = new File(__dirname + 'input/02 - 12 + 27 = 39.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "XXXIX"
        );
    });

    test("123 + 321 = 444", function() {
        let inputFile = new File(__dirname + 'input/03 - 123 + 321 = 444.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CDXLIV"
        );
    });

    test("2016 + 999 = 3015", function() {
        let inputFile = new File(__dirname + 'input/04 - 2016 + 999 = 3015.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "MMMXV"
        );
    });
});
