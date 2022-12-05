import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/equalizingArrays/equalizingArrays.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Equalizing arrays", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple.txt');
    });

    test("Binary", function() {
        let inputFile = new File(__dirname + 'input/02 - binary.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - binary.txt');
    });

    test("One hill", function() {
        let inputFile = new File(__dirname + 'input/03 - one hill.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - one hill.txt');
    });

    test("Two hill", function() {
        let inputFile = new File(__dirname + 'input/04 - two hill.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - two hill.txt');
    });

    test("Random", function() {
        let inputFile = new File(__dirname + 'input/05 - random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - random.txt');
    });

    test("Opposite 1", function() {
        let inputFile = new File(__dirname + 'input/06 - opposite 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - opposite 1.txt');
    });

    test("Opposite 2", function() {
        let inputFile = new File(__dirname + 'input/07 - opposite 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - opposite 2.txt');
    });

    test("One hill large", function() {
        let inputFile = new File(__dirname + 'input/08 - one hill large.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - one hill large.txt');
    });

    test("Two hill large", function() {
        let inputFile = new File(__dirname + 'input/09 - two hill large.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - two hill large.txt');
    });

    test("Blocks", function() {
        let inputFile = new File(__dirname + 'input/10 - blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - blocks.txt');
    });

    test("Zero", function() {
        let inputFile = new File(__dirname + 'input/11 - zero.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });
});
