import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/stickyKeyboard/stickyKeyboard.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sticky keyboard", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("If it aint broke", function() {
        let inputFile = new File(__dirname + 'input/01 - if it aint broke.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "dont fix it"
        );
    });

    test("One repeat letterr", function() {
        let inputFile = new File(__dirname + 'input/02 - one repeat letterr.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "if you dont succeed try again, try again, then try again!"
        );
    });

    test("Repeat earlier", function() {
        let inputFile = new File(__dirname + 'input/03 - repeat earlier.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - repeat earlier.txt');
    });

    test("Dropped letters", function() {
        let inputFile = new File(__dirname + 'input/04 - dropped letters.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - dropped letters.txt');
    });

    test("So much stickiness", function() {
        let inputFile = new File(__dirname + 'input/05 - so much stickiness.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - so much stickiness.txt');
    });

    test("Zorbishian Alien Language", function() {
        let inputFile = new File(__dirname + 'input/06 - zorbishian alien language.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - zorbishian alien language.txt');
    });

    test("Example", function() {
        let inputFile = new File(__dirname + 'input/07 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - example.txt');
    });
});
