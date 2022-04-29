import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/reverseMinesweeper/reverseMinesweeper.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Reverse Minesweeper", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One mine", function() {
        let inputFile = new File(__dirname + 'input/01 - one mine.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one mine.txt');
    });

    test("Many mines", function() {
        let inputFile = new File(__dirname + 'input/02 - many mines.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - many mines.txt');
    });

    test("Lot of mines", function() {
        let inputFile = new File(__dirname + 'input/03 - lot of mines.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - lot of mines.txt');
    });

    test("No mine", function() {
        let inputFile = new File(__dirname + 'input/04 - no mine.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - no mine.txt');
    });
});
