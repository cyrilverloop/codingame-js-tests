import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/substitutionEncoding/substitutionEncoding.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Substitution encoding", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("ABC", function() {
        let inputFile = new File(__dirname + 'input/01 - ABC.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "100100"
        );
    });

    test("Alphabet", function() {
        let inputFile = new File(__dirname + 'input/02 - alphabet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "07041212152415181203"
        );
    });

    test("Reverse alphabet", function() {
        let inputFile = new File(__dirname + 'input/03 - reverse alphabet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "42513232230323203252"
        );
    });

    test("Serious encode", function() {
        let inputFile = new File(__dirname + 'input/04 - serious encode.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "323343523141542234"
        );
    });
});
