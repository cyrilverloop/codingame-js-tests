import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/gameOfLife/gameOfLife.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Game of life", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("3x3", function() {
        let inputFile = new File(__dirname + 'input/01 - 3x3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 3x3.txt');
    });

    test("3x3 - 2", function() {
        let inputFile = new File(__dirname + 'input/02 - 3x3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 3x3.txt');
    });

    test("26x5", function() {
        let inputFile = new File(__dirname + 'input/03 - 26x5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 26x5.txt');
    });

    test("1x100", function() {
        let inputFile = new File(__dirname + 'input/04 - 1x100.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 1x100.txt');
    });

    test("100x1", function() {
        let inputFile = new File(__dirname + 'input/05 - 100x1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 100x1.txt');
    });

    test("30x30", function() {
        let inputFile = new File(__dirname + 'input/06 - 30x30.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - 30x30.txt');
    });

    test("1x1", function() {
        let inputFile = new File(__dirname + 'input/07 - 1x1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });
});
