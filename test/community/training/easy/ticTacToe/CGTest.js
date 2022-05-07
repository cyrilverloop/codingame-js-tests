import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/ticTacToe/ticTacToe.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("TicTacToe", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("No opponent - line", function() {
        let inputFile = new File(__dirname + 'input/01 - no opponent - line.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - no opponent - line.txt');
    });

    test("No opponent - column", function() {
        let inputFile = new File(__dirname + 'input/02 - no opponent - column.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - no opponent - column.txt');
    });

    test("No opponent - diagonal", function() {
        let inputFile = new File(__dirname + 'input/03 - no opponent - diagonal.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - no opponent - diagonal.txt');
    });

    test("Real condition", function() {
        let inputFile = new File(__dirname + 'input/04 - real condition.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - real condition.txt');
    });

    test("No win condition", function() {
        let inputFile = new File(__dirname + 'input/05 - no win condition.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });
});
