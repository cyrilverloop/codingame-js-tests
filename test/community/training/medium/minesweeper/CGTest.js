import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/minesweeper/minesweeper.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hidden mines", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Hidden mines", function() {
        let inputFile = new File(__dirname + 'input/02 - hidden mines.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - hidden mines.txt');
    });

    test("One line", function() {
        let inputFile = new File(__dirname + 'input/03 - one line.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - one line.txt');
    });

    test("Two blocks", function() {
        let inputFile = new File(__dirname + 'input/04 - two blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - two blocks.txt');
    });

    test("Final test", function() {
        let inputFile = new File(__dirname + 'input/05 - final test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - final test.txt');
    });
});
