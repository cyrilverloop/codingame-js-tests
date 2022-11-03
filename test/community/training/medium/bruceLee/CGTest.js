import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bruceLee/bruceLee.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bruce lee", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A", function() {
        let inputFile = new File(__dirname + 'input/01 - A.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A"
        );
    });

    test("AA", function() {
        let inputFile = new File(__dirname + 'input/02 - AA.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "AA"
        );
    });

    test("Bruce lee", function() {
        let inputFile = new File(__dirname + 'input/03 - bruce lee.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Bruce Lee"
        );
    });

    test("Epic message", function() {
        let inputFile = new File(__dirname + 'input/04 - epic message.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Bruce Lee vs Chuck Norris"
        );
    });

    test("This seems wrong...", function() {
        let inputFile = new File(__dirname + 'input/05 - this seems wrong....txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Large text", function() {
        let inputFile = new File(__dirname + 'input/06 - large text.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - large text.txt');
    });

    test("%*#0", function() {
        let inputFile = new File(__dirname + 'input/07 - %*#0.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "%*#0"
        );
    });

    test("This shouldn't work", function() {
        let inputFile = new File(__dirname + 'input/08 - this shouldn\'t work.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Invalid input", function() {
        let inputFile = new File(__dirname + 'input/09 - invalid input.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Invalid input 2", function() {
        let inputFile = new File(__dirname + 'input/10 - invalid input 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Invalid input 3", function() {
        let inputFile = new File(__dirname + 'input/11 - invalid input 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });
});
