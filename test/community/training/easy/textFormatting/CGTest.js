import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/textFormatting/textFormatting.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Text formatting", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One sentence without spaces", function() {
        let inputFile = new File(__dirname + 'input/01 - one sentence without spaces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "One, two, three."
        );
    });

    test("Two sentences", function() {
        let inputFile = new File(__dirname + 'input/02 - two sentences.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "One, two, three. Four, five, six."
        );
    });

    test("Extra spaces", function() {
        let inputFile = new File(__dirname + 'input/03 - extra spaces.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "One, two, three. Four, five, six."
        );
    });

    test("More errors", function() {
        let inputFile = new File(__dirname + 'input/04 - more errors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "One, two, three. Four, five, six."
        );
    });

    test("Shakespeare", function() {
        let inputFile = new File(__dirname + 'input/05 - shakespeare.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "When a father gives to his son, both laugh; when a son gives to his father, both cry. Shakespeare"
        );
    });
});
