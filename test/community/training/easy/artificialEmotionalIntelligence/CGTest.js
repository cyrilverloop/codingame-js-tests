import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/artificialEmotionalIntelligence/artificialEmotionalIntelligence.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Artificial emotional intelligence", function() {
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

        assertOutputAnswer(__dirname + 'output/01 - simple case.txt');
    });

    test("Repeating letters and space", function() {
        let inputFile = new File(__dirname + 'input/02 - repeating letters and space.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - repeating letters and space.txt');
    });

    test("With hyphen and period", function() {
        let inputFile = new File(__dirname + 'input/03 - with hyphen and period.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - with hyphen and period.txt');
    });

    test("Symbols and numbers", function() {
        let inputFile = new File(__dirname + 'input/04 - symbols and numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - symbols and numbers.txt');
    });

    test("You are not enough", function() {
        let inputFile = new File(__dirname + 'input/05 - you are not enough.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello Libby."
        );
    });

    test("With 'Y' and 'Z'", function() {
        let inputFile = new File(__dirname + 'input/06 - with Y and Z.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - with Y and Z.txt');
    });
});
