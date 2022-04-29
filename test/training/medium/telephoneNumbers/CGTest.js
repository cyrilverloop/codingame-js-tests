import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/telephoneNumbers/telephoneNumbers.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Telephone numbers", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A telephone number", function() {
        let inputFile = new File(__dirname + 'input/01 - a telephone number.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Numbers with a different base", function() {
        let inputFile = new File(__dirname + 'input/02 - numbers with a different base.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20
        );
    });

    test("Number included in another", function() {
        let inputFile = new File(__dirname + 'input/03 - number included in another.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test("Numbers with a common part", function() {
        let inputFile = new File(__dirname + 'input/04 - numbers with a common part.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            28
        );
    });

    test("Long list of numbers", function() {
        let inputFile = new File(__dirname + 'input/05 - long list of numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            45512
        );
    });
});
